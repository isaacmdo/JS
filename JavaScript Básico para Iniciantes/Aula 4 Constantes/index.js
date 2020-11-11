//Nao podemos criar variaveis com palavras reservadas como for ou if
//Variaveis precisam ter nomes significativos!.
//Nao pode começar o nome de uma variavel com numero!.
//Não pode conter espaços e caracteres especiais.
//Utiliza-se cameLCase
//Variaveis em js sem Case-sensitive
//nao utilize var e sim const
//Nao pode modificar o valor de uma constante

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero, resultadoTriplicado);


//typeof serve para verificar o tipo da variavel ou constante.
console.log(typeof(primeiroNumero));