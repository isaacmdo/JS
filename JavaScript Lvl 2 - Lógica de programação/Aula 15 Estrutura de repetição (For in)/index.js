const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
  console.log(frutas[i]);
};

//For in -> Le os índices ou chaves do objeto

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  idade: 30
};

for(let chave in pessoa){
  console.log(chave)
}

for(let chave in pessoa){
  console.log(chave, pessoa[chave])
};

