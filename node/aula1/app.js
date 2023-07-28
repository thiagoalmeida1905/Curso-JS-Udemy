// CommonJS -> ES6 Modules
const path = require('path');
const axios = require('axios');// improtação sem precisar de colocar o caminho
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Jão');
console.log(mod1);
console.log(p1);

//para pegar só uma função

// -> modo 1
// const falaNome = require('./mod1').falaNome; -> para pegar só uma função

// -> modo 2
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;