// ... rest, ...spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);//Guardando os dois primeiros valores em constantes
console.log(resto);//Operador rest para pegar o resto do array


const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [list1, lista2, lista3] = numeros;//Usando variaveis para manipular uma matriz

console.log(lista[2]);
console.log(numeros[1][2]);