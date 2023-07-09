const nome = 'Thiago';
const sobrenome = 'Santana de Almeida';
const idade = 22;
const peso = 80;
const alturaEmM = 1.74;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade; 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)