const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto = data.getDay();

switch(diaSemanaTexto){
  case 0:
    diaSemanaTexto = 'Domingo';
    break;

  case 1:
    diaSemanaTexto = 'Segunda';
    break;

  case 2:
    diaSemanaTexto = 'Terça';
    break;

  case 3:
    diaSemanaTexto = 'Quarta';
    break;

  case 4:
    diaSemanaTexto = 'Quinta';
    break;

  case 5:
    diaSemanaTexto = 'Sexta';
    break;

  case 6:
    diaSemanaTexto = 'Sábado';
    break;

  default:
    diaSemanaTexto = '';
    break;
};


// if(diaSemana === 0){
//   diaSemanaTexto = 'Domingo';
// } else if (diaSemanaTexto === 1){
//   diaSemanaTexto = 'Segunda';
// } else if (diaSemanaTexto === 2){
//   diaSemanaTexto = 'Terça';
// } else if (diaSemanaTexto === 3){
//   diaSemanaTexto = 'Quarta';
// } else if (diaSemanaTexto === 4){
//   diaSemanaTexto = 'Quinta';
// } else if (diaSemanaTexto === 5){
//   diaSemanaTexto = 'Sexta';
// } else if (diaSemanaTexto === 6){
//   diaSemanaTexto = 'Sábado';
// } else {
//   diaSemanaTexto = '';
// }


console.log(diaSemanaTexto);
console.log(diaSemana);

