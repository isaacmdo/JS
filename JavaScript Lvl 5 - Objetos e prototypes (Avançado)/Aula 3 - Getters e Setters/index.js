//Getters e Setters

function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  //Define as propriedades de um objeto/chave
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    configurable: true, //Define se a chave e reconfiguravel(com outro defineProprerty)
    get: function(){//Aqui definimos o getter do objeto nas propriedades da chave
      return estoquePrivado;
    },
    set: function(valor){
      if(typeof valor !== 'number'){
        throw new TypeError('Mensagem de erro');
      }

      estoquePrivado = valor
    }
  });
}

function criaProduto(nome, valor){
  return {
    get nome(){
      return nome;
    },
    set nome(valor){
    nome = valor;
   }
  };
};

let p2 = criaProduto('Camisa');
p2.nome = 'Qualquer coisa';

console.log(p2.nome);

let p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);