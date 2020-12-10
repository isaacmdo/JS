let produto = { nome: 'Caneca', preco: 1.8 };
let outraCoisa = produto

outraCoisa.nome = 'Outro nome';//Aqui as duas variaveis estamos apontando para o mesmo endereço de memoria
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

console.log('-----------------------');


let produto2 = { nome: 'Caneca', preco: 1.8 };
let outraCoisa2 = { ...produto2 };//Com o spreed operator estamos fazendo uma copia da variavel

outraCoisa2.nome = 'Outro nome';
outraCoisa2.preco = 2.5;
console.log(produto2);
console.log(outraCoisa2);

console.log('-----------------------');

let produto3 = { nome: 'Caneca', preco: 1.8 };
let caneca = Object.assign({}, produto3, { material: 'porcelana'});//Object.assing e uma outra forma de realizar uma copia, porem com mais parametros

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto3);
console.log(caneca);

console.log('-----------------------');

let produto4 = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto4,'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto4, 'nome'));//Retorna a descrição das propriedades do objeto
console.log(produto4);

console.log(Object.entries(produto4));//Retorna um array para cada chave


