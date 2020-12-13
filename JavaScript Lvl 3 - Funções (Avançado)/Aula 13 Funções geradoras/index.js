//Em funções geradoras usamos yield ao inves de return, mas não
//quer dizer que não possamos usar o return, o uso do return em funções geradoras
//tem como objetivo terminar a execução da função


//Esta e finita
function* geradora1(){
  yield 'Valor1';

  yield 'Valor2';

  yield 'Valor3';
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next())
console.log(g1.next());
//Esta e finita

console.log('Fim da geradora1')





//Este é "infinito"
function* geradora2(){
  let i = 0;

  while(true){
    yield i;
    i++;
  }
}


const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
//Este é "infinito"

console.log('Fim da geradora2')


function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
};

//Esta é uma função geradora que trabalha em conjunto com outra função geradora
function* geradora4(){
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
};

const g4 = geradora4()

for(let valor of g4){
  console.log(valor);
};

console.log('Fim da geradora 3 e 4')


function* geradora5(){
  yield function(){
    console.log('Vim do y1');
  };

  //....

  yield function(){
    console.log('Vim do y2');
  };

}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;