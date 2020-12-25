function rand(min, max){
  min *= 100;
  min *= 100;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if(typeof msg !== 'string') {
      reject ('CAI NO ERRO');
      return;
    }
      resolve(msg.toUpperCase() + ' - Passei pela promise');
      return;
    }, tempo);
  });
}

// esperaAi(`FASE 1`, rand(0, 1))
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//    })
//    .then(fase => {
//      console.log(fase);
//      return esperaAi('Fase 3', rand());
//    })
//    .then(fase => {
//      console.log(fase);
//      return fase;
//    })
//    .then(fase => {
//      console.log('Terminamos na fase', fase);
//     })
//     .catch(e => console(e));

  //Podemos utilizar a função async com await para esperar uma promise ser resolvida e retornar apenas quando a promise for resolvida
    async function executa(){
      try{
      const fase1 = await esperaAi(`FASE 1`, rand(0, 1));
      console.log(fase1);

      const fase2 = await esperaAi(`FASE 2`, rand(0, 1));
      console.log(fase2);

      const fase3 = await esperaAi(2, rand(0, 1));//Erro de parametro
      console.log(fase3);

      console.log('Terminamos na fase', fase3);

      } catch(e) {
      console.log(e);
      }
    }

    executa();
   