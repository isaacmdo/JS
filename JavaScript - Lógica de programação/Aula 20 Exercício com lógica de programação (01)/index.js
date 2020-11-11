function retornaMaior(valor1, valor2){
  if(valor1 > valor2){
    console.log(valor1);
    return valor1;
  } else {
    console.log(valor2);
    return valor2;
  }
};

retornaMaior(100, 10);

const max = (valor1, valor2) => valor1 > valor2 ? valor1 : valor2;
console.log(max(10, 49));

