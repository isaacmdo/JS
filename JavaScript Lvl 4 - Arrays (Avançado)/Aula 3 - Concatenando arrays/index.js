let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);//Aqui contatenamos o array a1 com array a2;
let a4 = [7, 8, 9];
console.log(a3);
let a5 = a3.concat(a4, [10, 11, 12], 'Luiz');//Aqui contatenamos o array a3 com um array dentro do concat e uma string
console.log(a5);

//...rest pega o resto do array
//...spread espalha o array

//spread
let a6 = [...a1, ...a2, ...[7, 8, 9]];
console.log(a6);