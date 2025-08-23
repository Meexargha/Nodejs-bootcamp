const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("welcome to my hotel !");
});
app.get("/chicken", (req, res) => {
  res.send(" chicken dichi darao  sona babu !");
});
app.get("/oldmonk", (req, res) => {
  res.send(" 60 ml  dichi  old monk !");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
