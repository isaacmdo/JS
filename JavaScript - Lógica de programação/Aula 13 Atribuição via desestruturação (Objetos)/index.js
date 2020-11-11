let pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

//Atrituição via desestruturação
let { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);

//Com valor padrão
// let { nome = 'Não existe', sobrenome } = pessoa;
// console.log(nome, sobrenome);

let { endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome);

// let { 
//     endereco: {rua, numero},
//     endereco
//   } = pessoa;
//   console.log(endereco)

//Podemos usar o operador rest tambem com objetos...
let {nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);




