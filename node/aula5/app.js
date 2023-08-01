const path = require('path');//Importando o módulo 'path' da biblioteca padrão do Node.js
const caminhoArquivo = path.resolve(__dirname, 'teste.json');//Resolvendo o caminho absoluto do arquivo 'teste.json' usando a variável '__dirname', que representa o diretório atual
const escreve = require('./modules/escrever'); //Importando a função 'escreve'
const ler = require('./modules/ler'); //Importando a função 'ler'

const pessoas = [ //Um array de objetos representando pessoas
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas, '', 2); // Convertendo o array 'pessoas' em uma string JSON formatada
escreve(caminhoArquivo, json);// Chamando a função 'escreve' para escrever os dados JSON no arquivo especificado por 'caminhoArquivo'

async function leArquivo(caminho) { //Função para ler e renderizar os dados do arquivo especificado por 'caminho'
    const dados = await ler(caminho);// Aguardando a função 'ler' ler o conteúdo do arquivo de forma assíncrona
    renderizaDados(dados);
}

function renderizaDados(dados) {// Função para renderizar os dados recebidos como uma string JSON
    dados = JSON.parse(dados);// Fazendo o parse dos dados JSON de volta para um array de objetos
    dados.forEach(val => console.log(val.nome));// Iterando pelo array e imprimindo o nome de cada pessoa
}
leArquivo(caminhoArquivo);// Chamando a função
