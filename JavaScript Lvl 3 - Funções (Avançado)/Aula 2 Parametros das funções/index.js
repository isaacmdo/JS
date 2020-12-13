function funcao(){
  console.log('Oi');
  console.log(arguments[3]);
  
  let total = 0;
  for (let argumento of arguments){
    total += argumento;
  };

  console.log(total);
};

funcao(1, 2, 3, 4, 5, 6);
//Ainda funciona

function funcao(a, b = 2, c = 4){
  console.log(a + b + c);
}
funcao(1);


function funcao({nome, sobrenome, idade}){
  console.log(nome, sobrenome, idade);
}

funcao({nome: 'Luiz', sobrenome: 'Otavio', idade: 20});

let obj = {nome: 'Luiz', sobrenome: 'Otavio', idade: 20};

funcao(obj);

// function funcao([valor1, valor2, valor3]){
//   console.log([valor1, valor2, valor3]);
// }

// funcao(['Luiz Otávio', 'Miranda', 30]);


function conta(operador, acumulador, ...numeros){
  for(let numero of numeros){
  if(operador ==='+') acumulador += numero;
  if(operador ==='-') acumulador -= numero;
  if(operador ==='/') acumulador /= numero;
  if(operador ==='*') acumulador *= numero;
  }
  console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);