const SHOPIFY_URL = `https://${STORE}.myshopify.com/admin/api/${API_VERSION}/graphql.json`;

const MAX_ORDERS = Number(process.env.MAX_ORDERS || 5000);
const PAGE_DELAY_MS = Number(process.env.PAGE_DELAY_MS || 120);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function shopifyGraphQL(query, variables) {
  const res = await fetch(SHOPIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors?.length) {
    const err = new Error(
      `Shopify GraphQL Error: ${json.errors.map((e) => e.message).join(" | ")}`
    );
    err.shopifyErrors = json.errors;
    throw err;
  }

  return json;
}

export const handler = async (event) => {
  try {

    const payload = event || {};

    const toISODate = (d) => {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(today);
    start.setDate(today.getDate() - 20); // last 21 days including today

    const startDate = toISODate(start);
    const endDate = toISODate(today);

    //const { startDate, endDate } = payload;

    if (!startDate || !endDate) {
      return response(400, {
        message: "startDate and endDate are required (YYYY-MM-DD)",
      });
    }

    const queryFilter = `
      created_at:>=${startDate}T00:00:00Z
      AND created_at:<=${endDate}T23:59:59Z
      AND (tag:instagram_influencer OR tag:youtube_creator)
    `
      .replace(/\s+/g, " ")
      .trim();

    const graphQuery = `
      query FetchInfluencerOrders($cursor: String, $query: String!, $limit: Int!) {
        orders(
          first: $limit,
          after: $cursor,
          query: $query,
          sortKey: CREATED_AT,
          reverse: true
        ) {
          pageInfo { hasNextPage endCursor }
          edges {
            node {
              id
              name
              createdAt
              processedAt
              tags

              displayFinancialStatus
              displayFulfillmentStatus

              totalPriceSet {
                shopMoney { amount currencyCode }
              }

              customer {
                id
                firstName
                lastName
                email
              }

              lineItems(first: 100) {
                edges {
                  node {
                    id
                    sku
                    title
                    variantTitle     # ✅ ADD THIS (size like "XS", "M")
                    quantity
                    fulfillableQuantity
                  }
                }
              }
                

              fulfillments(first:100){
          id
          deliveredAt
          displayStatus
          status
          totalQuantity
          fulfillmentLineItems(first:100){
            nodes{
              lineItem{
                quantity
                sku
                variantTitle
                discountedUnitPriceAfterAllDiscountsSet{
                  presentmentMoney{
                    amount
                  }
                }
              }
            }
          }
        }
      }
                events(first: 25, reverse: true) {
                  edges {
                    node {
                      id
                      status
                      happenedAt
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    let cursor = null;
    const all = [];

    while (true) {
      const data = await shopifyGraphQL(graphQuery, {
        cursor,
        query: queryFilter,
        limit: 250,
      });

      const ordersNode = data?.data?.orders;
      const edges = ordersNode?.edges || [];

      const normalized = edges.map(({ node: o }) => {
        const lineItems = (o.lineItems?.edges || []).map(({ node }) => {
          const qty = node.quantity ?? 0;
          const remaining = node.fulfillableQuantity ?? 0;

          const fulfilledQty = Math.max(0, qty - remaining);
          const unfulfilledQty = Math.max(0, remaining);

          return {
            id: node.id?.split("/").pop() || null,
            sku: node.sku || null,

            productTitle: node.title || null,          // rename for clarity
            variantTitle: node.variantTitle || null,   // ✅ SIZE

            quantity: qty,
            fulfilledQuantity: fulfilledQty,
            unfulfilledQuantity: unfulfilledQty,
            isFullyFulfilled: unfulfilledQty === 0,
          };
        });

        // const fulfilledItems = lineItems.filter((x) => x.fulfilledQuantity > 0);
        // const unfulfilledItems = lineItems.filter((x) => x.unfulfilledQuantity > 0);
        const lineItem = (o.lineItems?.edges || []).map(({ node }) => {
  const qty = node.quantity ?? 0;
  const remaining = node.fulfillableQuantity ?? 0;
  return {
    id: node.id?.split("/").pop() || null,
    sku: node.sku || null,
    productTitle: node.title || null,
    variantTitle: node.variantTitle || null,
    quantity: qty,
    unfulfilledQuantity: remaining,
  };
});

        const fulfillments = o.fulfillments || [];

       const deliveredFulfillments = fulfillments
      .filter(f => f.deliveredAt !== null)
       .map(f => ({
    fulfillmentId: f.id?.split("/").pop(),
    deliveredAt: f.deliveredAt,
    status: f.status,
    tracking: f.trackingInfo?.[0]?.url || null
  }));
        const pendingDeliveryFulfillments = fulfillments
  .filter(f => f.deliveredAt === null)
  .map(f => ({
    fulfillmentId: f.id?.split("/").pop(),
    status: f.status, // Usually 'SUCCESS' or 'OPEN'
    displayStatus: f.displayStatus, // Often 'In Transit' or 'Fulfilled'
    updatedAt: f.updatedAt
  }));

        const lastFulfilledDate =
          fulfillments
            .map((f) => f.updatedAt || f.createdAt)
            .filter(Boolean)
            .sort()
            .slice(-1)[0] || null;

        return {
          id: o.id?.split("/").pop() || null,
          name: o.name,
          createdAt: o.createdAt,
          processedAt: o.processedAt || null,
          tags: o.tags,
          deliveredAt:finalDeliveryDate,
          deliveredFulfillments,
          pendingDeliveryFulfillments,

          financialStatus: o.displayFinancialStatus ?? null,
          fulfillmentStatus: o.displayFulfillmentStatus ?? null,

          deliveredAt,
          lastFulfilledDate,

          totalAmount: o.totalPriceSet?.shopMoney?.amount ?? null,
          currency: o.totalPriceSet?.shopMoney?.currencyCode ?? null,

          customerId: o.customer?.id ? o.customer.id.split("/").pop() : null,
          customerName: o.customer
            ? `${o.customer.firstName || ""} ${o.customer.lastName || ""}`.trim()
            : null,
          customerEmail: o.customer?.email || null,

          lineItems,
          fulfilledItems,
          unfulfilledItems,
          deliveredItems,

          fulfillments: fulfillments.map((f) => ({
            id: f.id?.split("/").pop() || null,
            status: f.status || null,
            createdAt: f.createdAt || null,
            updatedAt: f.updatedAt || null,
            deliveredAt: f.deliveredAt || null,
            trackingInfo: (f.trackingInfo || []).map((t) => ({
              number: t.number || null,
              company: t.company || null,
              url: t.url || null,
            })),
            events: (f.events?.edges || []).map(({ node: ev }) => ({
              id: ev.id?.split("/").pop() || null,
              status: ev.status || null,
              happenedAt: ev.happenedAt || null,
            })),
          })),
        };
      });
     
      all.push(...normalized);

      if (all.length > MAX_ORDERS) {
        return response(413, {
          message: `Too many influencer-tagged orders for this range (${all.length}). Narrow the date range or increase MAX_ORDERS.`,
        });
      }

      const hasNext = !!ordersNode?.pageInfo?.hasNextPage;
      const endCursor = ordersNode?.pageInfo?.endCursor || null;
      if (!hasNext || !endCursor) break;

      cursor = endCursor;
      if (PAGE_DELAY_MS > 0) await sleep(PAGE_DELAY_MS);
    }

    return response(200, { count: all.length, startDate, endDate, orders: all });
  } catch (err) {
    console.error("Lambda error:", err);
    return response(500, {
      message: "Server error",
      error: String(err?.message || err),
      shopifyErrors: err?.shopifyErrors || undefined,
    });
  }
};

function response(statusCode, body) {
  return {
    statusCode,
    body: body,
  };
}