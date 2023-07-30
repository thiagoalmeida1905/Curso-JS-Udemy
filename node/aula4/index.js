//file system e Recursão Mútua

const fs = require('fs').promises; // Importa o módulo 'fs' (File System) do Node.js e usa a propriedade 'promises' para acessar funções assíncronas.

const path = require('path'); // Importa o módulo 'path' do Node.js, que fornece utilitários para manipulação de caminhos de arquivo.

async function readdir(rootDir) { // Declaração da função assíncrona 'readdir', que irá listar os arquivos de um diretório e seus subdiretórios.
    rootDir = rootDir || path.resolve(__dirname); // Define o 'rootDir' (caminho) para ser o diretório passado como argumento ou, caso não seja fornecido, o diretório atual (__dirname).
    const files = await fs.readdir(rootDir); // Usa 'await' para aguardar a resolução da Promise retornada por 'fs.readdir' e obter a lista de arquivos no diretório 'rootDir'.
    walk(files, rootDir); // Chama a função 'walk' para percorrer os arquivos e diretórios encontrados.
}

async function walk(files, rootDir) { // Declaração da função assíncrona 'walk', que percorre os arquivos e diretórios recebidos como parâmetros.
    for (let file of files) { // Loop 'for...of' que percorre cada 'file' (arquivo ou diretório) na lista 'files'.

        const fileFullPath = path.resolve(rootDir, file); // Cria o caminho completo do arquivo ou diretório, combinando o 'rootDir' com o 'file'. (pega todos os arquivos da pasta)
        const stats = await fs.stat(fileFullPath); // Usa 'await' para aguardar a resolução da Promise retornada por 'fs.stat' e obter informações sobre o arquivo ou diretório.

        // As próximas linhas contêm verificações para ignorar alguns arquivos e diretórios específicos.
        if (/\.git/g.test(fileFullPath)) continue; // Ignora arquivos/diretórios que possuem '.git' no caminho.
        if (/node_modules/g.test(fileFullPath)) continue; // Ignora arquivos/diretórios que possuem 'node_modules' no caminho.

        if (stats.isDirectory()) { // Verifica se o item é um diretório.
            readdir(fileFullPath); // Se for um diretório, chama recursivamente a função 'readdir' para listar os arquivos e subdiretórios dentro dele.
            continue; // Continua para o próximo item no loop, pois já processamos o diretório atual.
        }

        if (!/\.html$/g.test(fileFullPath)) continue; // Ignora arquivos que não terminam com a extensão '.html'.

        console.log(fileFullPath); // Se chegarmos até aqui, o item é um arquivo que corresponde à condição desejada (termina com '.html'). Então, o caminho completo é exibido no console.
    }
}

// Chamada da função 'readdir' com o caminho absoluto do diretório a ser percorrido.
readdir('/Users/tthia/Desktop/estudos/01 - Curso - JS - Udemy/Curso JS Udemy');
