/*
705.484.450-52 070.987.720-03

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
--------------------------
70 0 40 28 48 20 16 15  0 = 237
11 - (237 % 11) = 5 (Primeiro dígito/Proximo Digito)
(Se o resultado for maior que 9 e considerado como 0)

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
-----------------------------
77 0 45 32 56 24 20 20  0  10 = 284
11 - (284 % 11) = 2 (Primeiro dígito/Proximo Digito)

705.484.450-52 === 705.484.450-52(Cadastrado) (Valido)
*/


let cpfCliente = '705.484.450-52';
let numCpfCliente = cpfCliente.replace(/\D+/g, '');

let arrayCpfCliente = Array.from(numCpfCliente);
console.log(arrayCpfCliente);


let arrayReduzido = arrayCpfCliente.splice(0, 9);

console.log(arrayReduzido)

let conta = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let i = 0;

let somaCpf = arrayReduzido.reduce(function(acumulador, valor){
    acumulador += conta[i] * Number(valor);
    i++;
 
   return acumulador;//soma = multiplica += Number(valor);
}, 0);

 console.log(somaCpf);

 let proximoDigito = 11 - (somaCpf % 11);
 console.log(proximoDigito);

 conta = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

 i = 0;

 arrayReduzido.push(proximoDigito)

 console.log(arrayReduzido);

 somaCpf = arrayReduzido.reduce(function(acumulador, valor){
  acumulador += conta[i] * Number(valor);
  i++;

 return acumulador;//soma = multiplica += Number(valor);
}, 0);

console.log(somaCpf);

proximoDigito = 11 - (somaCpf % 11);

console.log(proximoDigito);

arrayReduzido.push(proximoDigito);

console.log(numCpfCliente);

let cpfAvaliado = arrayReduzido.join('')

console.log(cpfAvaliado);



if(cpfAvaliado === numCpfCliente){
  console.log('CPF Valído')
} else {
  console.log('CPF Inválido')
}