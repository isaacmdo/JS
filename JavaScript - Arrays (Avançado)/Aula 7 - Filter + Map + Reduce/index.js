//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)


let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numerosPares = numeros.filter(function(valor){
  return valor % 2 === 0;
}).map(function(valor) {
  return valor * 2;
}).reduce(function(ac, valor){
  return ac + valor;
});
//[ 50, 80, 2, 8, 22 ]
//[ 100, 160, 4, 16, 44 ]
//324
console.log(numerosPares);


//Em arrow function
let numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numerosPares2 = numeros2
.filter(valor => valor % 2 === 0)//[ 50, 80, 2, 8, 22 ]
.map(valor => valor * 2)//[ 100, 160, 4, 16, 44 ]
.reduce((ac, valor) => ac + valor);//324

console.log(numerosPares2);