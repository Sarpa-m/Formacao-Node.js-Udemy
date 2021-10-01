const express = require('express');
const router = express.Router();

router.get('/articles', (req,res)=>{
    res.send('rota de categorias')
});

router.get('/admin/articles/new', (req,res)=>{
    res.send('rota para cirar nova categoria')
});


module.exports = router;

