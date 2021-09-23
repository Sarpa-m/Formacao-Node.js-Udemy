const { query } = require('express');
const express = require('express'); //importa o express
const app = express();

app.get("/",function(req,res){
   var queryParan = req.query['nome']

    res.send('ola mundo')
    
});

app.get("/blog/:artigo?",function(req,res){
   var artigo = req.params.artigo
    res.send(
        (artigo) ? artigo : 'sem artigo'


    )
    
});

app.get("/ola/:nome",function(req,res){
    res.send(req.params.nome)
    
});


app.listen(8181,function(erro) {
    if(erro){
        console.log('ocoreu um erro')
    }else{
        console.log('Servidor iniciado com sucesso')
    }
})