// CLOSURE

//uma closure (também conhecida como função aninhada) é uma combinação de uma função e do ambiente léxico no qual ela foi definida. Isso significa que uma closure permite que uma função acesse variáveis externas, mesmo depois que a função tenha sido executada e seu escopo original tenha sido encerrado.

function retornaFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);