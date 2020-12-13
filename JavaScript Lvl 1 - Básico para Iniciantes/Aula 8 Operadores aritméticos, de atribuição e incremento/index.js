/**
 * 
 *  Aritmeticos:
 * 
 *  + Adição e concatenação
 *  - Subtração
 *  / Divisão
 *  * Multiplicação
 *  ** Potenciação(Elevado)
 *  % Resto da divisão
 * 
 */

 /*
  Precedencia dos operadores aritmeticos

  1° ()
  2° **  
  3° * / %
  4° + -

 */

 const num1 = 5;
 const num2 = 10;
 console.log(num1 + num2);
 console.log(num1 - num2);
 console.log(num1 / num2);
 console.log(num1 * num2);
 console.log(num1 ** num2);
 console.log(num1 % num2);

 let contadorPos = 1;
 contadorPos++; // 2
 contadorPos++; // 3
 contadorPos++; // 4
 contadorPos++; // 5

 let contadorPre = 1;
 ++contadorPre; // 2
 ++contadorPre; // 3
 ++contadorPre; // 4
 ++contadorPre; // 5

 //Podemos aplicar a variavel de incremento com  subtração tambem com --
 /* 
  Incremento ++
  Decremento --
 */

//Para valores mais que 1:

 let contador = 0;
 contador = contador + 2;
 contador += 2;

 contador = contador - 2;
 contador -= 2;

 contador = contador * 2;
 contador *= 2;

 contador = contador / 2;
 contador /= 2;

 contador = contador ** 2;
 contador **= 2;

 contador = contador % 2;
 contador %= 2;

 //Para converter numeros inteiros string para number use parseInt();

 const numero1 = 10;
 const numero2 = parseInt('5');

 console.log(numero1 + numero2);

 //Para converter numeros com casas decimais strings para number use parseFloat();

 const numero3 = 10;
 const numero4 = parseFloat('5.2');

 console.log(numero3 + numero4);

 //Ou use Number() para conversao de inteiro ou flotuante e seja feliz :)

 const numero5 = 10;
 const numero6 = Number('5.2');

 console.log(numero5 + numero6);

