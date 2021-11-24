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
//   password: "050994.Dm",
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

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`);
});
