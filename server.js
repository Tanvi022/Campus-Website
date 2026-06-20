const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tanviparab",
  database: "contactdb",
});

// ✅ Connect DB
db.connect((err) => {
  if (err) {
    console.log("❌ MySQL NOT Connected");
    console.log(err);
    return;
  }
  console.log("✅ MySQL Connected");
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("DATA RECEIVED:", req.body);

  const sql =
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }

    res.send("Message saved successfully ✅");
  });
});

// ✅ Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});