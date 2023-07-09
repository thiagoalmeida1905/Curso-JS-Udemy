const nome = 'Thiago Almeida';

// FOR CLASSICO - Geralmente com iteráveis (arrays ou strings)
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }


//FOR IN - Retorna o indice ou chave (string, array ou objetos)
// for (let i in nome) {
//     console.log(nome[i]);
// }

//FOR OF - retorna o valor em si (iteráveis, ararys ou strings)
for (let valor of nome) {
    console.log(valor);
}