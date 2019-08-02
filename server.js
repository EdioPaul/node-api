const express = require ('express'); // importa framework express
const mongoose = require ('mongoose'); // importa ORM 
const requireDir = require ('require-dir'); // lib para requires automat


// cria var app com função express
const app = express(); 
app.use(express.json());//permissão para enviar dados para aplicação via json


// conecta ao BD
mongoose.connect('mongodb://localhost:27017/nodeapi',  
{ useNewUrlParser: true}); 

//require após conectado ao banco de dados
//require('./src/models/Product'); endereço da pasta com o arquivo
requireDir('./src/models'); //endereço da pasta com o arquivo usando a lib

//rotas
app.use('/api', require('./src/routes')); //"use" recebe todo tipo de requisição e passa para o arquivo routes


// app escutando na porta 3001
app.listen(3001); 