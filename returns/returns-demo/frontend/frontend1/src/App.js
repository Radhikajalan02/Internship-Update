import { useEffect, useState } from "react";

function App() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/orders");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const markReturn = async (id) => {
    await fetch("http://localhost:5000/return", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: "return" }),
    });

    fetchOrders();
  };

  return (
    <div>
      <h2>Orders</h2>

      {orders.map((order) => (
        <div key={order.id}>
          <p>SKU: {order.sku}</p>
          <p>Status: {order.status}</p>

          <button onClick={() => markReturn(order.id)}>
            Mark Return
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;