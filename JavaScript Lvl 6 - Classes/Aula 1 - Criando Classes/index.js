class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
 
  falar(){
    console.log(`${this.nome} está falando.`);
  }

  comer(){
    console.log(`${this.nome} está comendo.`);
  }

  beber(){
    console.log(`${this.nome} está bebendo.`);
  }
  
}


const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Lucas', 'Miranda');
const p3 = new Pessoa('Matheus', 'Miranda');
const p4 = new Pessoa('Andre', 'Miranda');
console.log(p1);

console.log('Com uma função construtora ficaria assim');

function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
  console.log(`${this.nome} está falando.`);
}

const p5 = new Pessoa2('Isaac', 'Moura')

console.log(p5);