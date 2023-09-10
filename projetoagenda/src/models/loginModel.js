// Importa as bibliotecas necessárias
const mongoose = require('mongoose'); // Biblioteca para interagir com o MongoDB
const validator = require('validator'); // Biblioteca para validação de dados
const bcryptjs = require('bcryptjs'); // Biblioteca para hash de senhas

// Define o esquema (schema) para o modelo de login usando o mongoose
const loginSchema = new mongoose.Schema({
    email: { type: String, required: true }, // Campo de e-mail obrigatório
    password: { type: String, required: true }, // Campo de senha obrigatório
});

// Cria o modelo de login baseado no esquema
const loginModel = mongoose.model('Login', loginSchema);// nome do modelo e o esquema

// Define a classe Login
class Login {
    constructor(body) {
        this.body = body; // Armazena os dados do usuário (email e senha)
        this.errors = []; // Flag de erro 
        this.user = null; // Armazena as informações do usuário autenticado
    }//constructor

    // Função assíncrona para autenticar um usuário
    async login(){
        this.valida(); // Chama a função valida para validar os dados de entrada
        if(this.errors.length > 0 ) return; // Se houver erros, retorna sem autenticar

        // Tenta encontrar um usuário com o email fornecido no banco de dados
        this.user = await loginModel.findOne({ email: this.body.email }); //busca um documento no banco de dados que satisfaça uma condição específica.

        // Se o usuário não for encontrado, adiciona um erro
        if(!this.user) { 
            this.errors.push('Usuario não existe.'); 
            return; 
        }

        // Compara a senha fornecida pelo usuário com a senha armazenada no banco de dados
        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha Inválida');
            this.user = null;
            return;
        }
    }

    // Função assíncrona para registrar um novo usuário
    async register() {
        this.valida(); // Chama a função valida para validar os dados de entrada
        if(this.errors.length > 0 ) return; // Se houver erros, retorna sem registrar

        await this.userExists(); // Verifica se o usuário já existe no banco de dados

        if(this.errors.length > 0 ) return; // Se o usuário existir, retorna sem registrar

        // Gera um "sal" para a senha e a hash da senha fornecida pelo usuário
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        // Cria um novo registro de login no banco de dados
        this.user = await loginModel.create(this.body);
    }//register

    // Função assíncrona para verificar se o usuário já existe no banco de dados
    async userExists() {
        this.user = await loginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já existe');
    }

    // Função para validar os dados de entrada
    valida() {
        this.cleanUp(); // Chama a função cleanUp para garantir que os campos sejam strings

        // Validação dos campos.
        // Verifica se o email é válido usando o validator
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
        
        // Verifica se a senha tem entre 3 e 50 caracteres.
        if (this.body.password.length < 3 || this.body.password.length > 50) { 
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }//valida

    // Função para garantir que todos os campos sejam strings
    cleanUp () {
        for(const key in this.body) { // percorre o form (.body) / key = representa o nome da propriedade atual sendo iterada
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''; // Converte campos não-strings para strings vazias
            }
        }

        // Recria o objeto body apenas com as chaves 'email' e 'password'
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }//cleanUp
}// class

// Exporta a classe Login para que ela possa ser usada em outros módulos
module.exports = Login;
