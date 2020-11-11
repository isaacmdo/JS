//Declaração de função (function hoisting);
falaOi();
function falaOi(){
  console.log('Oi');
};
//Aqui acontece o hoisting

// Funções são first-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um dado');
};
//Variavel recebe uma função e passa a ser uma função tambem
//souUmDado();

function executaFuncao(funcao){
  funcao();
};

executaFuncao(souUmDado); // Aqui executa o parametro da função tambem


//Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function')
};

funcaoArrow();


//Função dentro de uma propriedade de um objeto
const obj = {
  falar: function() {
    console.log('Estou falando...');
  }
}

obj.falar();


//Função dentro de um objeto
const obj2 = {
  falar() {
    console.log('Estou falando...');
  }
}

obj.falar();

