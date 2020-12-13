//Filtrer, map, reduce

//Retorne os números maiores que 10
let numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

//A função callback utilizada no parametro do .filter(), pode conter os seguintes parametros:
// function callbackFilter(valor, indice, array){..}

function callbackFilter(valor){
  return valor > 10;
}

//Obs: Não executamos a função dentro do parametro
let numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);


//Podemos utilizar tambem uma função anonima dentro do parametro de filter
let numerosFiltrados2 = numeros.filter(function(valor){
  return valor > 10;
});

console.log(numerosFiltrados2);

//Podemos utilizar tambem arrow function como parametro
let numerosFiltrados3 = numeros.filter((valor) => {
  return valor > 10;
});

console.log(numerosFiltrados3);


//Com arrow function quando retornamos apenas 1 valor em uma linha de codigo, não precisamos utilizar a palavra return, nem as chaves, 
//Com arrow functon quando utilizamos apenas 1 parametro, não precisamos dos parenteses
let numerosFiltrados4 = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados4);


let numerosFiltrados5 = numeros.filter((valor, indice, array) => {
  console.log(`  Valor do indice analisado ${valor}, 
  Valor do indice analisado ${indice}, 
  Valor completo do array analisado ${array}
  
  `);
  return valor > 10;
});

console.log(numerosFiltrados5);


let pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

let pessoasComNomeGrande = pessoas.filter(function(obj){
  console.log(obj.nome);
  return obj.nome.length >= 7;
});

console.log(pessoasComNomeGrande);

let pessoasComNomeGrande2 = pessoas.filter(obj => obj.nome.length >= 7);
console.log(pessoasComNomeGrande2);

let pessoasComIdadeAlta = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComIdadeAlta);

let pessoasComA = pessoas.filter(function(obj){
  return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasComA);