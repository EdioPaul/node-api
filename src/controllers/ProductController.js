//CRUD
//para trabalhar com o BD
const mongoose = require ('mongoose');// importa ORM  (Object Relational Mapping)


//importa a model de product
const Product = mongoose.model('Product');


/*Rota de listagem*/
//exporta objeto com algumas funções
module.exports = {
   async index(req, res) { //lista todos os produtos da base de dados
    const { page = 1 } = req.query; //usando recurso de desestruturação do ES6, query para get diferente de params 

    //await só executa após conseguir buscar no BD
    //{}, {page: 1, limit: 10}, primeira chaves se fosse realizar filtros, depois uma pag com 10 itens
     const products = await Product.paginate({}, { page, limit: 10});//page sozinho (short sintaxe)

     return res.json(products)//retorna em uma estrutura JSON javascript object notation
   },

    /*Rota de detalhes*/
    async show(req, res){
      const product = await Product.findById(req.params.id);//pega o id pelos parametros da rota
      
      //retorna o produto criado na base de dados
      return res.json(product);
    },

   /*Rota de criação*/
  //definindo novo metodo
  async store (req, res) {
    //Criação
    const product = await Product.create(req.body);//passa todos os campos do corpo da requisição

    //retorna o produto criado na base de dados
    return res.json(product);
  
  },

      /*Rota de atualização*/
  async update (req, res) {
    //pega o id pelos parametros da rota e atualiza com os parametros 
    //que vem do req.body (unindo a funcionalidade do show com a do store).
    // O new é muito importante para atualizar, se não volta como antigo.
     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true} );
      
     //retorna o produto atualizado na base de dados
     return res.json(product);
  },


     /*Rota de remoção*/
  async destroy (req, res) {
    await Product.findByIdAndRemove(req.params.id);//pega o id pelos parametros da rota
    
    //não retorna o produto, ele vai destruir
    return res.send();//apenas retorna mensagem de sucesso sem conteudo
  }


};