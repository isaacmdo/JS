/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um
objeto para outro.

Definição de protótipo:
Protótico é o termino usado para referir ao que foi criado pela primeira vez, 
servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referencia interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para criá-lo. 
Quando tentamos acessar um membro de um objeto, primeiro o motor de JS vai encontrar 
este membro no próprie objeto e depois a cadeia de protótipos é usada até o topo (null) 
até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function (){
  return this.nome + ' ' + this.sobrenome;
}

let pessoa1 = new Pessoa('Luiz', '0.'); //<- Pessoa = função construtora
let data = new Date(); //<- Date = função contrutora

console.dir(pessoa1);
console.dir(data);

//O motor de JavaScript procura os metodos dos objetos neste exemplo em
//pessoa1.nomeCompleto --> Pessoa.prototype --> Object.prototype
//Deixas os metodos no prototype do objeto aumenta a performace do programa