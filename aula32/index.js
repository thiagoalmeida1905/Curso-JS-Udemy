//Atribuição via desestruturação (Arrays)

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// const letras = [b, c ,a];
// [a, b, c] = letras;
// console.log(a,b,c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,];
const [primeiroNumero, segundoNumero, ] = numeros; //... rest, ...spread
console.log(primeiroNumero, segundoNumero);


