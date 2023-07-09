function relogio (){ // todo cód colocado dentro de uma function para não estar no escopo global
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); // data vai receber o valor do parametro * 1000 (mlsegundos)
        return data.toLocaleTimeString('pt-BR', { //vai retornar a hora formata para BR
            hour12: false,
            timeZone: 'UTC'
        });
    }
    const relogio = document.querySelector('.relogio'); // Selecionando o relogio
    let segundos = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function() { // função vai att o timer
            segundos ++;
            relogio.innerHTML = criaHoraDosSegundos(segundos); // formata o segundo de acordo com a hora,
        }, 1000); // a função anonima vai ser executada a cada 1 seg
    };



    document.addEventListener('click', function(e){
        const el = e.target; // el recebe todo o click
        if (el.classList.contains('iniciar')){ // se o usuario clickar em um local que contem a class iniciar, ele vai fazer o que está pedindo
        relogio.classList.remove('pausado');// remove a cor red 
        clearInterval(timer); //roda o timer novamente/evita 2 timers
        iniciaRelogio();
        }

        if (el.classList.contains('pausar')){ // a mesma coisa do iniciar porém add a cor red
            clearInterval(timer);// pausa o timer
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;//relogio volta do zero
            relogio.classList.remove('pausado');// remove a cor red
        }
    });
}

relogio();

