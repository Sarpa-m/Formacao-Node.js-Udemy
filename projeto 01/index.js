const express = require("express");
const app = express();
const connection = require("./database/database")
const perguntaModel = require("./database/Pergunta")

//dataase

    try {
      connection.authenticate();
      console.log('Connection has been established successfully.');
    }  catch (error) {
      console.error('Unable to connect to the database:', error);
    }

// infoma qual é o motar de view
app.set("view engine", "ejs");
app.use(express.static("public"));
// bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//Rotas
app.get("/", (req, res) => {
  res.render("index.ejs", {});
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs", {});
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descrição = req.body.descricao;

  // res.render("perguntar", {});
  res.send("recebido titulo: " + titulo + ' descrição: '+ descrição);
});

app.listen(80, (e) => {
  console.log(e ? "erro" : "app funcionado ");
});
