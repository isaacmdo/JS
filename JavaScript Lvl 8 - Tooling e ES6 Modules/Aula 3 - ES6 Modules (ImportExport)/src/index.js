import { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1';
//Palavra 'as' renomeia a variavel importada
//Utilizamos ela para não haver alguma colisão de nomes ja declarados

const p1 = new Pessoa('Luiz', 'Otavio');

const nome = 'João';

console.log(nome2);
console.log(nome, sobrenome, idade);
console.log(soma(5, 5));
console.log(p1);

//PODEMOS IMPORTAR TUDO DO MODULO1 COM (import * as meuModulo from './modulo1';)
//Ai criamos um objeto que podemos manipulalo