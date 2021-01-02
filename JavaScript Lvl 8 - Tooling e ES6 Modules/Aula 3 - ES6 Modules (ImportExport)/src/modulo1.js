const nome = 'Luiz';
//Podemos criar já exportando com (export const nome = 'Luiz';)
const sobrenome = 'Miranda';
//Podemos criar já exportando com (export const sobrenome = 'Miranda';)
const idade = 30;
//Podemos criar já exportando com (export const idade = '30';)

function soma(x, y){
  return x + y;
}
//Podemos criar já exportando com (export function soma...)

export class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
//Utilizamos a palavra default para criar e elemento padrao do modulo, ou seja,
//ao importar este arquivo sem declarar o que seria importado o padrao e o retorno do default
//Ex.: export default function soma...

export { nome, sobrenome, idade, soma };
//Palavra 'as' tambem funciona no export