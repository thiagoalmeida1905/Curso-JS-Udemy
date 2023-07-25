//os módulos são uma forma de organizar e encapsular o código em arquivos separados, permitindo que diferentes partes de um programa sejam divididas em unidades lógicas e reutilizáveis. 

import Pessoa, { nome, sobrenome } from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);