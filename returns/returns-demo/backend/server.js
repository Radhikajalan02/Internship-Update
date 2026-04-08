const express = require("express"); //backend server
const cors = require("cors"); //allows react to call API
const sqlite3 = require("sqlite3").verbose(); 

const app = express();

app.use(cors());
app.use(express.json()); //read JSON from request body

const db = new sqlite3.Database("./orders.db");
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sku TEXT,
      status TEXT
    )
  `);
});
db.run(
  `INSERT INTO orders (sku, status) VALUES ('TSHIRT001', 'none')`
);
app.get("/orders", (req, res) => {
  db.all("SELECT * FROM orders", (err, rows) => {
    res.json(rows);
  });
});
app.post("/return", (req, res) => {
  const { id, status } = req.body;

  db.run(
    `UPDATE orders SET status = ? WHERE id = ?`,
    [status, id],
    () => {
      res.json({ success: true });
    }
  );
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});