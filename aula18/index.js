//Aula basica sobre arrays e funções

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Thiago', 'Almeida', 22);
const pessoa2 = criaPessoa('Filipe', 'Santana', 29);
const pessoa3 = criaPessoa('Selmo', 'Galindo', 22);
const pessoa4 = criaPessoa('Gabriela', 'Camargo', 21);
const pessoa5 = criaPessoa('Leisiane', 'Almeida', 22);
console.log(pessoa1.nome);