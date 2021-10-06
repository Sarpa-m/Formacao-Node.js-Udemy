const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');



router.get('/admin/articles', (req,res)=>{
    res.render('admin/articles/index')
});

router.get('/admin/articles/new', (req,res)=>{

Category.findAll().then(Categories=>{
    //console.log(Categories)
    res.render('admin/articles/new',{
        Categories:Categories
    })
})
    

});

router.post('/article/save',(req, res)=>{
    var title = req.body.title;
    var body = req.body.articleBody;
    var category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        CategoryId: category,
    }).then(()=>{
        res.redirect("/admin/articles")
    })
})

module.exports = router;

