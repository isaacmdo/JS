let umaString = "Um \"texto\"";

console.log(umaString);

umaString = "Um \\texto";

console.log(umaString);

//           01234567   uma string é um "array" :)
umaString = "Um texto";

console.log(umaString[4]);

//           01234567
umaString = "Um texto";

console.log(umaString.charAt(6));

//           01234567
umaString = "Um texto";

console.log(umaString.charCodeAt(6)); //Valor referente a tabela ASCI

//           concatenação com concat
umaString = "Um texto";

console.log(umaString.concat(' em um lindo dia'));


// indexOf para ver o indice da um array/string
console.log(umaString.indexOf('texto'))

//lastIndexOf para achar o indice 0 retrocedendo a varredura apartir do indice 3
console.log(umaString.lastIndexOf('o', 3))


//Para substituir um indice
console.log(umaString.replace('texto', 'Outro texto'))


umaString = 'Um texto';
//Para pegar o tamanho de uma string
console.log(umaString.length);

umaString = 'O rato roeu.'
//Para determinar de onde começa e onde termina
console.log(umaString.slice(2,6)) // começa no indece 2 e termina no indice 6


console.log(umaString.slice(-5,-1)); //"De tras para frente" com sinal negativo

//Para dividir uma string em um array
console.log(umaString.split(' ', 3));

//Para toda string em maiusculo
console.log(umaString.toUpperCase())

//para toda string em minusculo
console.log(umaString.toLowerCase())











