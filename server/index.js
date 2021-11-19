const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001;

// grants access to server
app.use(cors());
// middleware to tell Express to break requests in JSON format
app.use(express.json());

// const db = mysql.createPool({
//   connectionLimit: 10,
//   user: "b6e37d5a8c1cbf",
//   host: "us-cdbr-east-03.cleardb.com",
//   password: "0262edac",
//   database: "heroku_9aa12b8a5f2ac2d",
// });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "050994.Dm",
  database: "hds-ecommerce",
});

// GET
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

// POST
// app.post("/createtodo", (req, res) => {
//   console.log(`POST: ${req.body.todo_task}`);
//   const task = req.body.todo_task;
//   const status = req.body.status;
//   const index = req.body.index_task;

//   // question mark in parenthesis and value in array to avoid data injection
//   db.query(
//     "INSERT INTO todo (todo_task, status, index_task) VALUES (?, ?, ?)",
//     [task, status, index],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Task inserted");
//       }
//     }
//   );
// });

// // PUT
// app.put("/todo/:id", (req, res) => {
//   const id = req.body.todo_id;
//   const task = req.body.todo_task;
//   const status = req.body.status;
//   const index = req.body.index_task;

//   db.query(
//     "UPDATE todo SET ?, ?, ? WHERE todo_id = ?",
//     [{ todo_task: task }, { status: status }, { index_task: index }, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Task updated");
//       }
//     }
//   );
// });

// // DELETE
// app.delete("/todo/:id", (req, res) => {
//   console.log(`DELETE: ${req.params.id}`);
//   const taskId = req.params.id;
//   db.query("DELETE FROM todo WHERE todo_id = (?)", [taskId], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send("Task deleted");
//       console.log(`Sucessfully deleted ${taskId} from todo table`);
//     }
//   });
// });

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`);
});
