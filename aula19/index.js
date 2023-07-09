// aula sobre Valores primitivos e valores por referência

/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, object , function - passados por referência

dependerá do valor de a para saber se é um dado mutável ou não
*/

/*
ex. valor por referência
let a = 'A';
let b = a; -> cópia
console.log(a,b)
a = 'outra coisa';
console.log(a,b)
saida = Outra coisa A // ou seja, trocando o valor da variavel a, não troca o valor de b
*/