const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}
falaNome();

//A função conhece tudo que há declarado dentro dele e o local onde foi declarada, e o que está nos "vizinhos" dela.
// se a função não achar a variavel dentro dela, ela vai localizar em outro local (pai), e assim por diante, caso não encontre, vai dar erro