const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;


for(let p of ps){
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFF';
};

// ps.forEach(function(valor, indice){
//   console.log(valor, indice);
//   valor.style.background = backgroundColorBody;
//   valor.style.color = '#FFF'
// })

// console.log(backgroundColorBody);

// for(let p of ps){
//   console.log(p);
// };