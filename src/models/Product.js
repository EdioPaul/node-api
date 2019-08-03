// importa mongoose
const mongoose = require ('mongoose'); // importa ORM  (Object Relational Mapping)
const mongoosePaginate = require ('mongoose-paginate');//import paginate


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

ProductSchema.plugin(mongoosePaginate);

//registra a model(colunas) no BD
mongoose.model("Product", ProductSchema);