function saudacao(nome){
  console.log(`Bom dia! ${nome}!`);
  return 123456 //Podemos ter um retorno da função
}
//Para chamar uma funcao
saudacao('Maria');
saudacao('Joao');
//Funcoes sao reutilizaveis em podem receber parametros..

function saudacao_Dois(nome){
  return (`Bom dia! ${nome}!`);
}

const retorno = saudacao_Dois('Roberto'); //Aqui esta armazenado a retorno da função
console.log(retorno)

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
//Constante resultado está presente apenas no escopo da função
console.log(soma(2, 2));

// function soma(x = 1, y = 2) {
//   const resultado = x + y;
//   return resultado;
// }
// //Constante resultado está presente apenas no escopo da função
// console.log(soma(2, 2));//Aqui sobresquece o valor do parametro

const raiz = function (n) {
  return n ** 0.5;
}

console.log(raiz(9));

const raiz_arrow = n => n ** 0.5;//Função anonima

console.log(raiz_arrow(9));





