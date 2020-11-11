/*
Valores primitivos (imútaveis) - string, number, boolean, undefined, 
null (bigint, symbol) - VALORES COPIADOS
*/
let c = 'C';
let d = c; // Variavel D cria uma cópia da variavel C

console.log(a, b);

c = 'Outra coisa';
console.log(a, b);


/*
Valores por Referencia (mutável) - array, object, function - VALORES POR PONTEIROS
*/
let a = [1, 2, 3];
let b = a;
console.log(a, b); //Apartir deste ponto A e B apontam para o mesmo valor na memoria

a.push(4);
console.log(a, b);

a.pop();
console.log(a, b);



