const titulo = document.querySelector('.titulo');

let data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto = data.getDay();

const mesDoAno = data.getMonth();
let mesDoAnoTexto = data.getMonth();


switch(diaSemana){
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

switch(mesDoAno){
  case 0:
    mesDoAnoTexto = 'Janeiro';
    break;

  case 1:
    mesDoAnoTexto = 'Fevereiro';
    break;

  case 2:
    mesDoAnoTexto = 'Março';
    break;

  case 3:
    mesDoAnoTexto = 'Abril';
    break;

  case 4:
    mesDoAnoTexto = 'Maio';
    break;

  case 5:
    mesDoAnoTexto = 'Junho';
    break;

  case 6:
    mesDoAnoTexto = 'Julho';
    break;

  case 7:
    mesDoAnoTexto = 'Agosto';
    break;

  case 8:
    mesDoAnoTexto = 'Setembro';
    break;

  case 9:
    mesDoAnoTexto = 'Outubro';
    break;

  case 10:
    mesDoAnoTexto = 'Novembro';
    break;

  case 11:
    mesDoAnoTexto = 'Dezembro';
    break;

  default:
    mesDoAnoTexto = '';
    break;
};

let dia = data.getDate();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();

titulo.innerHTML += `${diaSemanaTexto}`;
titulo.innerHTML += `, ${dia} de `;
titulo.innerHTML += `${mesDoAnoTexto} `;
titulo.innerHTML += `de ${ano} `;
titulo.innerHTML += `${hora}:`;
titulo.innerHTML += `${minutos}`;