// 01/01/1970 Timestamp unix ou época unix
let data = new Date();

console.log(data.toString());

//Formato ano, mes, dia, hora, minuto, segundo, milisegundo.
//Mes vai de 0 a 11
data = new Date(2019, 3, 20 ,15, 14, 30);

console.log(data.toString());

//Outro formato de data
data = new Date('2019-04-20 20:20:59');

data = new Date();

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

function zeroAEsquerda (num){
  return num >= 10 ? num : `0${num}`;
}

function formataData(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth());
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


