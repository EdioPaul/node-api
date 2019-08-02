const express = require ('express');
const mongoose = require ('mongoose');
const routes = express.Router();

//importa
const ProductController = require ('./controllers/ProductController');

//rota principal passando requisição e pegando resposta 
routes.get('/products', ProductController.index); //chama o metodo index de ProductController

//acesso ao product para inserir ou atualizar novos valores fake
/*const Product = mongoose.model('Product');
Product.create({
   title: 'Reative Native',
   description: 'teste',
   url: 'http://exemplo.com.br'

});*/

// exporta o routes para usar dentro do server.js
module.exports = routes; 