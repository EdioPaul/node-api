const express = require ('express');
const routes = express.Router();

const ProductController = require ('./controllers/ProductController');//importa

//rota principal passando requisição e pegando resposta 
routes.get('/products', ProductController.index); //chama o metodo index de ProductController

module.exports = routes; // exporta o routes para usar dentro do server.js