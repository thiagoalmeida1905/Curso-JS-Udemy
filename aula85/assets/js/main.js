class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {// assim que o usuario der submit, eventos chama a função handle submit
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
      });
    }

    handleSubmit(e) {// -> handleSubmit só é chamada quando o formulario for submetido
        e.preventDefault();//-> interrompe a submissão do formulário
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) { // validação para poder submeter
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }// -> handleSubmit

    senhasSaoValidas() {
        let valid = true;// -> flag

        const senha = this.formulario.querySelector('.senha');// pegando o valor de senha
        const repetirSenha = this.formulario.querySelector('.repetir-senha');// pegando o valor de senha

        if(senha.value !== repetirSenha.value) { 
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
        return valid; // se passar por todo o tratamento e condições, retorna valido
    }//-> senhasSaoValidas

    camposSaoValidos() {
        let valid = true; // flag -> irá mudar se algo der errado.

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
        errorText.remove(); // remove o texto para ñ ficar se repetindo
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;// pegando os nomes de cada campo para validação abaixo.

        if(!campo.value) {// chegando se está em branco
            this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
            valid = false;// troca a flag p/ o formulario ser enviado
        }

        if(campo.classList.contains('cpf')) {
            if(!this.validaCPF(campo)) valid = false;// se validaCPF for false, setta a flag
        }

        if(campo.classList.contains('usuario')) {
            if(!this.validaUsuario(campo)) valid = false;
        }
    }
    return valid;
}// -> CamposSãoValidos

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) { //checando usuario deve conter entre 3 e 12 caracteres
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {// match é usado para verificar se uma string corresponde a um padrão especificado por uma expressão regular
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
        }
  
         return valid;
    }// -> valida usuario

    validaCPF(campo) { // Validação do CPF
        const cpf = new ValidaCPF(campo.value);
  
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
        return false; // se o cpf for invalido, retorna false e aparece a mensagem p/ o usuario
        }
        return true;
    }

    criaErro(campo, msg) {
      const div = document.createElement('div');// nova div criada
      div.innerHTML = msg; // na div aparecerá a msg 
      div.classList.add('error-text');// adicionada a class error-text para CSS
      campo.insertAdjacentElement('afterend', div);// inserção. indicação que a div será inserida imediatamente após o elemento referenciado
    }// -> criaErro
} // -> ValidaFormulário

const valida = new ValidaFormulario();