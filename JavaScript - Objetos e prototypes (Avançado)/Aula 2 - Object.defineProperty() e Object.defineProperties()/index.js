//defineProperty - defineProperties

function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  //Define as propriedades de um objeto/chave
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    value: estoque, //Valor da chave
    writable: false, //Define se o valor pode ser alterado ou nao
    configurable: true //Define se a chave e reconfiguravel(com outro defineProprerty)
  });

  //Pode definir as propriedades de varios objetos/chave
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Mostra a chave
      value: nome, //Valor da chave
      writable: true, //Define se o valor pode ser alterado ou nao
      configurable: true //Define se a chave e reconfiguravel(com outro defineProprerty)
    },
    preco: {
      enumerable: true, // Mostra a chave
      value: preco, //Valor da chave
      writable: true, //Define se o valor pode ser alterado ou nao
      configurable: true //Define se a chave e reconfiguravel(com outro defineProprerty)
    },
  })
}

let p1 = new Produto('Camiseta', 20, 3);
console.log(p1);