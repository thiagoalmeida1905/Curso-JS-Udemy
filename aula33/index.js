// Atribuição via desestruturação (objetos)

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Almeida',
    idade: 22,
    endereco:{
        //rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação 
const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;
console.log(r, numero, endereco);