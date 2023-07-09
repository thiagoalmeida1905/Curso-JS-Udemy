// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // captura dos inputs
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //conversão dos inputs para number
    const altura = Number(inputAltura.value);

    if (!peso){// checagem para ver se o valor do input é verdadeiro, a flag 'false' é colcoada p/ class para mudança de cor da mensagem que vai aparecer pro usuario.
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // funçao especifica para o calculo do imc
    const nivelImc = getNivelImc(imc)// função especifica para o nivel (texto) do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // msg com os valores

    setResultado(msg, true); //função para colocar a mensgaem como verdadeira
});

function getNivelImc (imc) {// criação do array de nivel do 
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    // checagem de tras para frente, pq assim que achar o 'return' a função para e retornar o valor do array
    if (imc >= 39.9)return nivel[5];
    if (imc >= 34.9)return nivel[4];
    if (imc >= 29.9)return nivel[3];
    if (imc >= 24.9)return nivel[2];
    if (imc >= 18.5)return nivel[1];
    if (imc < 18.5)return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP () { //função p/ criar paragrafo
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) { //Função p/ resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //limpa todo o hmtl do resultado

    const p = criaP(); 

    if(isValid) { // checa se é verdadeiro
    p.classList.add('paragrafo-resultado'); // se valida, fica verde
    } else {
    p.classList.add('bad'); //se não fica vermelho
    }

    p.innerHTML = msg; // apaga o html
    resultado.appendChild(p); //e acrescenta o paragrafo
}
