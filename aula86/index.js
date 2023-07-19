// PROMISES -> O uso de promessas torna o código mais legível, simplifica o tratamento de operações assíncronas e permite o encadeamento de várias operações de maneira eficiente usando .then(). Além disso, facilita o controle de erros com o .catch(), tornando as promessas um padrão amplamente adotado para lidar com tarefas assíncronas em JavaScript.


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {// sempre recebe 2 param.
        if(typeof msg !== 'string') reject(false);
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {//serve para tratar o erro
        console.log('ERRO:', e);
    });

console.log('Isso aqui será exibido antes de qualquer promisse.');

// exemplificação função de callback
// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb ();
//     }, tempo);
// }

// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function(){
//         esperaAi('Frase 3', rand(1,3));
//     });
// });