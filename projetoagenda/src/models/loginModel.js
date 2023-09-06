const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const loginModel = mongoose.model('Login', loginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }//constructor

    async register() {
        this.valida();
        if(this.errors.length > 0 ) return;

        await this.userExists();

        if(this.errors.length > 0 ) return;


        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        try{

            this.user = await loginModel.create(this.body);
        } catch(e){
            console.log(e);
        }
    }//register

    async userExists() {
        const user = await loginModel.findOne({ email: this.body.email });
        if (user) this.errors.push('Usuário já existe')
    }

    valida() {
        this.cleanUp();
        //validação.
        //Email precisa ser válido.
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
        //A senha precisa ter entre 3 e 50 caracteres.
        if (this.body.password.length < 3 || this.body.password.length > 50) { this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');}
    }//valida

    cleanUp () {// vai garantir com que todo o conteudo do body(formulario) seja string
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }//cleanUp
}// class

module.exports = Login;