const express = require ('express'); // importa framework express
const mongoose = require ('mongoose'); // importa ORM 
const requireDir = require ('require-dir'); // lib para requires automat


const app = express(); // cria var app com função express

mongoose.connect('mongodb://localhost:27017/nodeapi',  // conecta ao BD
{ useNewUrlParser: true}); 

//require após conectado ao banco de dados
//require('./src/models/Product'); endereço da pasta com o arquivo
requireDir('./src/models'); //endereço da pasta com o arquivo usando a lib

//acesso ao product para inserir ou atualizar novos valores
//const Product = mongoose.model('Product');

//rotas
app.use('/api', require('./src/routes')); //"use" recebe todo tipo de requisição e passa para o arquivo routes

app.listen(3001); // app escutando na porta 3001