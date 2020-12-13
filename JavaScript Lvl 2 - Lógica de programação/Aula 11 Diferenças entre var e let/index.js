//let tem escopo de bloco{....bloco}
//var só tem escopo de função

const verdadeira = true;

let nome = 'Luiz'; //criando
var nome2 = 'Luiz'; //criando

if(verdadeira){
  let nome = 'Otávio'; //criando
  var nome2 = 'Rogério'; //redeclarando

  if(verdadeira){
    var nome2 = 'Ronaldo'; //redeclarando
    let nome = 'Outra coisa';
  }
}

console.log(nome, nome2);

//Podemos ver no console.log que cada let está presente no seu determinado escopo,
//Diferentemente de var.

function falaOi(){
  let nome = 'Luiz';
  var sobrenome = 'Miranda';
}

console.log(sobrenome);

falaOi();

//Vemos que var tem escopo de função, o mesmo ocorre com let

//Var ocorre o hoisting variaveis são jogadas para cima do documento
//podendo ocorrer erros de undefined


