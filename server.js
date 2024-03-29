// server.js

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/download", (req, res) => {
  const file = path.join(__dirname, "public", "todos.pdf");
  res.download(file, "todos.pdf");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
