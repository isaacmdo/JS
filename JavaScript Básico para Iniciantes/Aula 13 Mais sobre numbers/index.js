let num1 = 10; //number
let num2 = 2.5 //number


//Para transformar um number e uma string temporariamento
console.log(num1.toString() + num2);
console.log(typeof num1);

//Para alterar definitivamente
num1 = num1.toString();

//Para transformar o numero em binario
console.log(num1.toString(2));


//Para definir a quantidade de casas decimais
console.log(num1.toFixed(4));

//Resultado true ou false para verificar se o numero e inteiro ou não
console.log(Number.isInteger(num1));

//Resultado true ou false para verificar se a operação tem uma string
console.log(Number.isNaN(num1));

//As contas do javascript existem uma certa imprecisão no padrao IEEE 754-2008
//Para resolver as imprecisões usando Number e toFixed

num1 = Number(num1.toFixed(2));
