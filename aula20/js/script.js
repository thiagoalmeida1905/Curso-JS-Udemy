function meuEscopo (){ // função para garantir que nenhuma outra variavel no escopo atrapalhe o código. 
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); // Essa linha previne o comportamento padrão do formuçário, que seria atualizara página ao ser submetido, evitando o recarregamento desnecessário da pag.
        const nome = form.querySelector('.nome'); 
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ //objeto pessoa -> cada vez que for enviado o form, cria-se um objeto que é passado para um array "const pessoas".
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);//quando o evento submit é ouvido a função recebeEvento... é executada 
};

meuEscopo(); // 'ativar' a function 
