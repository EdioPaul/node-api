// importa mongoose
const mongoose = require ('mongoose'); 


// cria tabela BD
const ProductSchema = new mongoose.Schema({ 
    
    //objetos
  title: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true,
  },
  url: {
      type: String,
      required: true,
  },

  //salva momento de cada criação no BD
  createdAt: {
      type: Date,
      default: Date.now,
  },
});


//registra a model(colunas) no BD
mongoose.model("Product", ProductSchema);