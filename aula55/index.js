// IIFE -> Immediately invoked function expresssion

//A principal finalidade do IIFE é criar um escopo isolado para evitar poluição do escopo global e evitar conflitos de nome entre variáveis e funções. Ele permite que você defina variáveis e funções dentro do escopo da função IIFE sem interferir com o escopo externo.
(function(idade, peso, altura) {

    const sobrenome = 'Almeida';
    function criaNome(nome) {
      return nome + ' ' + sobrenome;
    }
  
    function falaNome() {
      console.log(criaNome('Thiago'));
    }
  
    falaNome();
    console.log(idade, peso, altura);
  
  })(22, 80, 1.75);