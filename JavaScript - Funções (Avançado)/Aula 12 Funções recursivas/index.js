//Função recursiva é uma função que chama ela mesma
//Temos que cuidar com o limite da engine do JS para dar um fim determinado a recursividade, assim não ocorrendo um loop-infinito

function recursiva(max){
  if(max >= 10) return;
  max++;

  console.log(max);
  recursiva(max);
};

recursiva(1);