function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo')
}, 5000);

// Explicação do código acima : 

/*
1 - foi criada uma função na qual pega a data atual e a retorna em pt-BR e no formato 24h
2 - Foi criado uma variavel (timer) na qual contem setInterval (que executa determinada função/instrução varias vezes em um determinado intervalo), no caso, a cada vez que a variavel timer for mencionada no código, a função "mostraHora", vai ser executada, e será mostrada a cada 1000 milisegundo (1seg), resumindo, quando chamada a variável timer, vai ser executada em loop a função mostraHora a cada 1seg.
3 - A função setTimeout irá determinar quando o código parar, no caso, vai parar em 3seg a variavel timer que foi executada.
4 - a segunda função setTimeOut, irá mostrar a mensagem a cada 5seg
*/