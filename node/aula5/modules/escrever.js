const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });// criação de um arquivo com caminho absoluto
};