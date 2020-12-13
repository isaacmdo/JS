//Dobrar os números

let numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 11, 15, 22, 27];


//O parametro do metodo .map recebe uma função que pode ter o valor, indice e o array 
numeros.map(function (valor, indice, array){
  console.log(valor, indice, array);
});

let numerosEmDobro = numeros.map(function (valor, indice, array){
  return valor * 2;
});

console.log(numerosEmDobro);


let pessoas = [
  {nome :'Luiz', idade: 62},
  {nome :'Maria', idade: 23},
  {nome :'Eduardo', idade: 55},
  {nome :'Letícia', idade: 19},
  {nome :'Rosana', idade: 32},
  {nome :'Wallace', idade: 47}
];

let nomes = pessoas.map(obj => obj.nome);

console.log(nomes);


let idades = pessoas.map(function(obj){
  delete obj.nome;
  return obj;
})
console.log(idades);

idades2 = pessoas.map(function(obj){
  return {idade: obj.idade};
})
console.log(idades2);

idades3 = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades3);



//Aqui mexemos no obj original
let comIds = pessoas.map(function(obj, indice){
  obj.id = (indice + 1) * 500;
  return obj;
});

console.log(comIds);


//Aqui criamos uma copia com id do objeto original
comIds = pessoas.map(function(obj, indice){
  let newObj = {...obj};
  newObj.id = indice;
  newObj.id = (indice + 1) * 1000;
  return newObj;
});

console.log(comIds);