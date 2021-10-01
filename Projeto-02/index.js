const express = require("express");
const app = express();
const connection = require('./database/database')


const CategoriesController = require('./categories/CategoriesController')
const ArticlesController = require('./articles/ArticlesController')

const Category = require('./categories/Category')
const Article = require('./articles/Article')



//View engine
app.set('view engine', "ejs");

// Static
app.use(express.static("public"))

//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//Database

connection.authenticate().then(() => {
    console.log('conexão feita com sucesso')
}).catch((e) => {
    console.error('databese error', e);
})

app.use('/', CategoriesController)
app.use('/', ArticlesController)

app.get('/', (req, res) => {
    res.render('index')
});


app.listen(80, () => {
    console.log('o servidor esta rodando')
});