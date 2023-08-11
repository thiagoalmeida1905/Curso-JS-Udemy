// Declaração de função (Function hoisting)
falaOi();

function falaOi() {
    console.log ('Oi');
}
// tanto importa se chamada a função antse de sua declaração

// Função é First-class objects

const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();