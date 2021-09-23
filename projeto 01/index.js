const express = require("express");
const app = express();
// infoma qual é o motar de view
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar", {});
});

app.listen(8888, (e) => {
  console.log(e ? "erro" : "app funcionado ");
});
