const express = require ('express');//importa o express
const mongoose = require ('mongoose');// importa ORM  (Object Relational Mapping)
const routes = express.Router();

//importa
const ProductController = require ('./controllers/ProductController');

//rota principal passando requisição e GET "pegando" resposta 
routes.get('/products', ProductController.index); //chama o metodo index de ProductController
routes.get('/products/:id', ProductController.show);//pegar um unico produto pelo id
routes.post('/products', ProductController.store); //sempre usa post para criar algo no servidor
routes.put('/products/:id', ProductController.update); //sempre usa put para atualizar algo no servidor
routes.delete('/products/:id', ProductController.destroy); //sempre usa delete para apagar algo no servidor


//acesso ao product para inserir ou atualizar novos valores fake
/*const Product = mongoose.model('Product');
Product.create({
   title: 'Reative Native',
   description: 'teste',
   url: 'http://exemplo.com.br'

});*/

// exporta o routes para usar dentro do server.js
module.exports = routes; 