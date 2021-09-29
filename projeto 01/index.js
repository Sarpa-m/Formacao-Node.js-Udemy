const express = require("express");
const moment = require('moment')
const app = express();
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Respostas")


moment
//dataase

try {
  connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// infoma qual é o motar de view
app.set("view engine", "ejs");
app.use(express.static("public"));
// bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Rotas
app.get("/", (req, res) => {

  Pergunta.findAll({
    row: true, order: [
      ['id', 'DESC']
    ]
  }).then(perguntas => {

    res.render("index.ejs", { perguntas: perguntas });

  })



});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs", {});
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect('/')
  })

});


app.get('/pergunta/:id', (req, res) => {
  var id = req.params.id
  Pergunta.findOne({
    where: { id: id }
  }).then(pergunta => {
    if (pergunta != undefined) {

      Resposta.findAll({
        where: { perguntaId: pergunta.id }
      }).then(respostas=>{
        console.log(respostas)
        res.render("pergunta.ejs", { 

          pergunta: pergunta, 
          respostas : respostas,
          moment: moment
        });
      })} else {
      res.redirect('/')
    }

  })
})

app.post('/responder', (req, res) => {
  var corpo = req.body.corpo
  var perguntaId = req.body.pergunta

  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect('pergunta/' + perguntaId)
  })
})


app.listen(80, (e) => {
  console.log(e ? "erro" : "app funcionado ");
});
