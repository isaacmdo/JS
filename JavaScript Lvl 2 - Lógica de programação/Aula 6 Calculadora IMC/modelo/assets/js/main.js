function calculaImc(){

  const form = document.querySelector('.form');
  const calculo = document.querySelector('.calculo');

  function recebeEvento(evento){
  evento.preventDefault();

      calculo.innerHTML = '';
      const peso = document.querySelector('.peso');
      const altura = document.querySelector('.altura');
      
        
      const resultado = peso.value / (altura.value ** 2);

      if(resultado <= 18.5){
        calculo.innerHTML += `Seu IMC é (${resultado}) Peso ideial`;
      } else if (resultado >= 18.5 && resultado <= 24.9){
        calculo.innerHTML += `Seu IMC é ${resultado} Peso normal`;
      } else if (resultado >= 25 && resultado <= 29.9){
        calculo.innerHTML += `Seu IMC é (${resultado}) Sobrepeso`;
      } else if (resultado >= 30 && resultado <= 34.9){
        calculo.innerHTML += `Seu IMC é (${resultado}) Obesidade grau 1`;
      } else if (resultado >= 35 && resultado <= 39.9){
        calculo.innerHTML += `Seu IMC é (${resultado}) Obesidade grau 2`;
      } else if (resultado > 40){
        calculo.innerHTML += `Seu IMC é (${resultado}) Obesidade grau 3`;
      } else {
        calculo.classList.add('calculoInvalido');
        calculo.innerHTML += `Valor invalido`;
      };
}

form.addEventListener('submit', recebeEvento);

};

calculaImc();