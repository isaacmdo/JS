let pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log('--------');

let chave = 'nome'
console.log(pessoa[chave]);
console.log(pessoa['nome']);


console.log('--------');

//Criando objetos com construtor
let pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otávio';

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2);

console.log('--------');

delete pessoa2.sobrenome;

console.log(pessoa2);

console.log('--------');

let pessoa3 = new Object();
pessoa3.nome = 'Luiz';
pessoa3.sobrenome = 'Otávio';
pessoa3.idade = 30;
pessoa3.falaNome = function() {
  return (`${this.nome} está falando seu nome`)
};

pessoa3.getDataNascimento = function() {
  let dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa3.getDataNascimento());
console.log(pessoa3.falaNome());



console.log('--------');

//Factory function

function criaPessoa(nome, sobrenome){
  return {
    nome,
    sobrenome,
    nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

let p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto());



//Constructor function

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
};

let p4 = new Pessoa('Luiz', 'Miranda');
let p5 = new Pessoa('Maria', 'Miranda');
console.log(p4);
console.log(p5);

