const mongoose = require('mongoose'); // Importa a biblioteca Mongoose para interagir com o MongoDB
const validator = require('validator'); // Importa a biblioteca Validator para validar dados

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // Define um campo 'nome' do tipo String que é obrigatório
    sobrenome: { type: String, required: false, default: '' }, // Define um campo 'sobrenome' do tipo String que é opcional e tem um valor padrão de ''
    email: { type: String, required: true, default: '' }, // Define um campo 'email' do tipo String que é obrigatório e tem um valor padrão de ''
    telefone: { type: String, required: false, default: ''}, // Define um campo 'telefone' do tipo String que é opcional e tem um valor padrão de ''
    criadoEm: { type: Date, default: Date.now}, // Define um campo 'criadoEm' do tipo Date com um valor padrão de agora
});

const ContatoModel = mongoose.model('Contato', ContatoSchema); // Cria o modelo Contato a partir do esquema

// Define uma função construtora Contato
function Contato(body) {
    this.body = body; // Atribui o corpo recebido à propriedade 'body'
    this.errors = []; // Inicializa uma lista de erros vazia
    this.contato = null; // Inicializa a propriedade 'contato' como nula
};

// Método para registrar um novo contato
Contato.prototype.register = async function() {
    this.valida(); // Chama a função 'valida' para validar os dados do formulário
    if(this.errors.length > 0) return; // Se houver erros, retorna sem continuar
    this.contato = await ContatoModel.create(this.body); // Cria um novo documento de contato no banco de dados
};

// Método para validar os dados do formulário
Contato.prototype.valida = function(){
    this.cleanUp(); // Chama a função 'cleanUp' para garantir que todos os campos sejam strings

    // Validação.
    // Verifica se o email é válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.')
    // Verifica se o nome foi preenchido
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.')
    // Verifica se foi fornecido pelo menos um meio de contato (e-mail ou telefone)
    if (!this.body.email && !this.body.telefone) this.errors.push('Ao menos um contato deve ser enviado: e-mail ou telefone')
}//valida

// Método para garantir que todos os campos do formulário sejam strings
Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };
};

// Método para editar um contato
Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;
    this.valida(); // Chama a função 'valida' para validar os dados do formulário
    if(this.errors.length > 0 ) return; // Se houver erros, retorna sem continuar
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true }); // Atualiza o documento do contato no banco de dados
};

// Métodos estáticos (associados à classe em vez da instância)
Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string' ) return;
    const contato = await ContatoModel.findById(id); // Busca um contato por ID no banco de dados
    return contato;
}

Contato.buscaContatos = async function() {
    const contatos = await ContatoModel.find() // Busca todos os contatos no banco de dados
        .sort({criadoEm: -1 }); // Ordena por data de criação (do mais recente para o mais antigo)
    return contatos;
}

Contato.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({_id: id}); // Deleta um contato por ID no banco de dados
    return contato;
};

module.exports = Contato; // Exporta a classe Contato
