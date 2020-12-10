//new Object -> Object.prototype

let objA = {
  chaveA: 'A'
  //__proto__: Object.prototype
};

let objB = {
  chaveB: 'B'
  //__proto__: Object.prototype
};

let objC = new Object();
  objC.chaveC = 'C';
  //__proto__: Object.prototype


//Podemos usar os metodos e chaves do prototype de outros objetos
//setando com o metodo Object.setPrototype(obj1, obj2);

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
//Desta forma todos os objetos se enxergam, pois B enxerga A, e como C esta acessando B,
//todos os metodos que B esta exergando C tambem consegue acessar


//Assim reaproveitamos os codigos de outros objetos.

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual/100));
}

let p1 = new Produto ('Camiseta', 50);

p1.desconto(50)
console.log(p1);
p1.aumento(100);
console.log(p1);

console.log('____________________');


let p2 = {
  nome: 'Caneca',
  preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);

//Aqui mostramos na pratica como o p2 herda o prototype do p1.

let p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(10);
console.log(p3);
//Aqui criamos o objeto já setando o prototype


