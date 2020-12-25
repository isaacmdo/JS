function rand(min, max){
  min *= 100;
  min *= 100;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject ('BAD VALUE');
      return;
    }
    setTimeout(() => {1
      resolve(msg + ' Passei pela promise');
      return;
    }, tempo);
  })
}




//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000)
];

//Resolve todas as promises de uma vez
Promise.all(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  });



//Resolve todas as promises, porem so retorna a promise que foi resolvida por primeiro "A mais rapida"
Promise.race(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  });

  function baixaPagina(){
    const emCache = true;
    if(emCache){
      return Promise.reject('Página em cache');
    } else {
      return esperaAi('Baixei a página', 3000);
    }
  }

  baixaPagina()
    .then(dadosPagina => {
      console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));


