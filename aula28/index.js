// objeto date

//01/01/1970 - Timestamp unix ou época unix
// sintaxe - new Date(); -> a, m, d, h, M, s, ms
// const data = new Date('2023-06-06 12:00:00');


const data = new Date();
console.log(data.toString());

//data.getDate(); -> dia
//data.getMonth(); -> mês começa do zero
//data.getFullyear();
//data.getDay(); -> 0 - Dias da semana - Domingo, 6 - Sábado