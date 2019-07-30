//CRUD
const mongoose = require ('mongoose');//para trabalhar com o BD

const Product = mongoose.model('Product');//importa a model de product

//exporta objeto com algumas funções
module.exports = {
   async index(req, res) {//lista todos os produtos da base de dados
     const products = await Product.find();//await só executa após conseguir buscar no BD

     return res.json(products)//retorna em uma estrutura JSON javascript object notation
   },
};