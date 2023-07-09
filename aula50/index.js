// AULA SOBRE PARAMETROS

//toda function tem uma variavel especial (Arguments) que sustenta todos os argumentos enviados
function funcao() {
    console.log('oie');
}
funcao ('Valor')


function conta (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
    }
}

conta('+', 0, 20, 30, 40, 50);