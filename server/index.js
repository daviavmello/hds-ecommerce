const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001;

// grants access to server
app.use(cors());
// middleware to tell Express to break requests in JSON format
app.use(express.json());

const db = mysql.createPool({
  connectionLimit: 10,
  user: "b2ec8c5b8da72d",
  host: "us-cdbr-east-04.cleardb.com",
  password: "5d337e16",
  database: "heroku_4b93c43ec6cec9b",
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "hds-ecommerce",
// });

// GET Vendors
app.get("/vendors", (req, res) => {
  db.query("SELECT * FROM vendors", (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(`GET: ${result}`);
      res.send(result);
    }
  });
});

// GET Products 
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(`GET: ${result}`);
      res.send(result);
    }
  });
});

// POST
app.post("/order_details", (req, res) => {
  console.log(`POST: ${req.body.todo_task}`);
  const task = req.body.todo_task;
  const status = req.body.status;
  const index = req.body.index_task;

  // question mark in parenthesis and value in array to avoid data injection
  db.query("INSERT INTO orders (todo_task, status, index_task) VALUES (?, ?, ?)", [task, status, index], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("New order in");
    }
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`);
});
