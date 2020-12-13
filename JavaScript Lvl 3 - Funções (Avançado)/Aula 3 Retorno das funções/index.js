//return
//Retorna um valor
//Termina a função

function criaPessoa(nome, sobrenome){
  return { nome, sobrenome };
};

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);


function duplica(n){
  return n * 2;
}

function triplica(n){
  return n * 3;
}

function quadriplica(n){
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log('#######')
//Exemplo de Closure
function criaMultiplicador(multiplicador){
    return function (n){
      return n * multiplicador;
    }
}

const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(2));
console.log(triplica2(3));
console.log(quadriplica2(4));
