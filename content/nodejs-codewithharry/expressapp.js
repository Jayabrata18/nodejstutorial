const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.get("/about", (req, res) => {
  // res.send('about')
  // res.sendFile(path.join(__dirname, "index.html"));
  res.json({"joy": 12})
});
app.listen(port, () => {
  console.log(`example app listening on port http://localhost:${port}`);
});
