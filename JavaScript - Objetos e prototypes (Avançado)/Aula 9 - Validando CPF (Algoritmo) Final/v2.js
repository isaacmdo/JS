function calculaCpf(){

  const form = document.querySelector('.form')
  const calculo = document.querySelector('.calculo')
  let cpfCliente = document.querySelector('.cpf');

    function recebeEvento(evento){
    evento.preventDefault();

    cpfCliente.innerHTML = '';
    calculo.innerHTML = '';

    let numCpfCliente = cpfCliente.value.replace(/\D+/g, '');
    let arrayCpfCliente = Array.from(numCpfCliente);
    let arrayReduzido = arrayCpfCliente.splice(0, 9);

    let conta = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let i = 0;

    let somaCpf = arrayReduzido.reduce(function(acumulador, valor){
      acumulador += conta[i] * Number(valor);
      i++;
      return acumulador;//soma = multiplica += Number(valor);
    }, 0);

    let proximoDigito = 11 - (somaCpf % 11);
    conta.unshift(11) 
    i = 0;

    arrayReduzido.push(proximoDigito)
    somaCpf = arrayReduzido.reduce(function(acumulador, valor){
      acumulador += conta[i] * Number(valor);
      i++;
      return acumulador;
    }, 0);

    proximoDigito = 11 - (somaCpf % 11);
    arrayReduzido.push(proximoDigito);
    let cpfAvaliado = arrayReduzido.join('')

function validaCpf(){
  if(cpfAvaliado === numCpfCliente){
    calculo.innerHTML += `Valor válido`;
  } else {
    calculo.classList.add('calculoInvalido');
    calculo.innerHTML += `Valor invalido`;
  }
};

  validaCpf();

    }

  form.addEventListener('submit', recebeEvento);

  };

calculaCpf();