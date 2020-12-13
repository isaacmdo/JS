const nomes = ['Luiz', 'Otávio', 'Henrique'];

for(let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
};

console.log('######')

for (let valor of nomes){
  console.log(valor);
};

console.log('######')

for (let i in nomes){
  console.log(nomes[i]);
};

console.log('######')

nomes.forEach(function(valor, indice){
  console.log(valor, indice);
});

console.log('######');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

for (let chave in pessoa){
  console.log(chave, pessoa[chave]);
};

//For clássico - Geralmente com iteraveis (array ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si de iteraveis