//Some todos os números (reduce);
//Proposito da função reduce e reduzir um array em um unico elemento;

let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let total = numeros.reduce(function(acumulador, valor, indice, array){
  acumulador += valor;
  console.log(acumulador);
  return acumulador;
}, 0);//<<O 0 é opcional, se n mandar este valor default, o valor default sera o valor do primeiro indice do array

console.log("-----------")
console.log(total);


//Retornar um array com o dobro dos valores (poderiamos usar map tambem)
let numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let total2 = numeros.reduce(function(acumulador, valor, indice, array){
  acumulador.push(valor * 2)
  return acumulador;
}, []);

console.log(total2);


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);