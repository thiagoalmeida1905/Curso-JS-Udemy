const elementos = [ // array com os objetos 
    {tag: 'p', texto: 'Qualquer texto que quiser'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const container = document.querySelector('.container'); //selecionando a section
const div = document.createElement('div'); // criando a div dentro da section

for (let i = 0; i < elementos.length; i++){ //laço para percorrer o array 
    let { tag, texto} = elementos[i]; // desestruturação de obj, criando a 
    let tagCriada = document.createElement(tag); // criando a tag
   // tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);// nó de texto
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada); //adicionando a tag para a div que foi criada
}

container.appendChild(div)
