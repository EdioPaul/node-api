//CRUD
//para trabalhar com o BD
const mongoose = require ('mongoose');


//importa a model de product
const Product = mongoose.model('Product');

//exporta objeto com algumas funções
module.exports = {
   async index(req, res) {//lista todos os produtos da base de dados
     const products = await Product.find();//await só executa após conseguir buscar no BD

     return res.json(products)//retorna em uma estrutura JSON javascript object notation
   },

  //definindo novo metodo
  async store (req, res) {
    //Criação
    const product = await Product.create(req.body);//passa todos os campos do corpo da requisição

    //retorna o produto criado na base de dados
    return res.json(product);
  
  }


};