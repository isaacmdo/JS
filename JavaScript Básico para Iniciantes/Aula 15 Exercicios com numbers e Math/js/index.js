// let num = prompt('Digite um número: ');
// num = Number(num);

// document.body.innerHTML += `<h1><strong>Seu numero é ${num} <br/><strong><h1>`;
// document.body.innerHTML += `Raiz quadrada: ${num**0.5} <br/>`;
// document.body.innerHTML += `${num} inteiro é ${Number.isInteger(num)} <br/>`;
// document.body.innerHTML += `É NaN: ${Number.isNaN.num} <br/>`;
// document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)} <br/>`;
// document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num)} <br/>`;
// document.body.innerHTML += `Com duas casas decimais: ${Number(num.toFixed(2))} <br/>`;

// document.body.innerHTML += `<h1><strong>Segunda Forma de resolver o exercicio<strong><h1><br/>`

const numero = Number(prompt('Digite um Número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero**0.5}</p>`;
texto.innerHTML += `<p>${numero} inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${Number(numero.toFixed(2))}</p>`;


