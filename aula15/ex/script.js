const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número - 2 é ${numero - 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada de ${numero} é ${Math.sqrt(numero)}</p>`; //num ** 0.5
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} arrendondado para baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} arrendondado para cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} com duas casas decimais: ${numero.toFixed(2)}</p>`;

