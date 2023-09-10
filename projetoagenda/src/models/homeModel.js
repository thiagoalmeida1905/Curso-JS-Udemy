const mongoose = require('mongoose'); // Importa a biblioteca Mongoose para interagir com o MongoDB

// Define o esquema para o modelo Home
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true }, // Define um campo 'titulo' do tipo String que é obrigatório
    descricao: String // Define um campo 'descricao' do tipo String que não é obrigatório
});

// Cria o modelo Home a partir do esquema
const HomeModel = mongoose.model('Home', HomeSchema);

// Define a classe Home
class Home {

}

// Exporta a classe Home
module.exports = Home;
