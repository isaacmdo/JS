//Função construtora -> objetos
//Função fabrica -> Objetos
//Construtora -> 

function Pessoa(nome, sobrenome) {


  //Atributos privados
  const interna = 12356;

  const metodoInterno = function(){

  };
  //Atributos privados


  //Atributos e métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function(){
    console.log(this.nome + ': sou um método')
  };
  //Atributos e métodos públicos

  
};

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
console.log(p2.nome);