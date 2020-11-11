//Princio de um objeto

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);




//Função factor de criação de objetos

function criaPessoa(nome, sobrenome, idade){
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
};

// Uma outra forma mais compacta:
// function criaPessoa(nome, sobrenome, idade){
//   return { nome, sobrenome, idade }
// };


const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Maria', 'Otavio', 33);
const pessoa3 = criaPessoa('Fernando', 'Otavio', 22);
const pessoa4 = criaPessoa('Carlos', 'Otavio', 43);
const pessoa5 = criaPessoa('Pedro', 'Otavio', 11);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);


//Um objeto pode ter um metodo:

const objetoMetodo = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24,

    fala(){
      console.log(`Agora minha idade é ${this.idade}.`);
    },

    incrementaIdade(){
      this.idade++;
    }
  };

  objetoMetodo.fala();
  objetoMetodo.incrementaIdade();
  objetoMetodo.fala();
  objetoMetodo.incrementaIdade();
  objetoMetodo.fala();
  objetoMetodo.incrementaIdade();