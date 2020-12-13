function calculaCpf(){

  const form = document.querySelector('.form')
  const calculo = document.querySelector('.calculo')
  let cpfEnviado = document.querySelector('.cpf');

  
    function recebeEvento(evento){
    evento.preventDefault();

    cpfEnviado.innerHTML = '';
    calculo.innerHTML = '';

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.value.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};


const cpf = new ValidaCPF(cpfEnviado);


if(cpf.valida()) {
  calculo.classList.remove("calculoInvalido");
  calculo.innerHTML += `CPF Válido`;
} else {
  calculo.classList.add('calculoInvalido');
  calculo.innerHTML += `CPF Inválido`;
}

}

form.addEventListener('submit', recebeEvento);

};

calculaCpf();