//Symbol cria ids aleatorios, nenhum symbol é igual o outro
//Evita erros de manutenção de codigo ex: c1.velocidade = 2000
const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade(){
    console.log('GETTER');
    return this[_velocidade];
  }

  set velocidade(valor){
    console.log('SETTER');
    if(typeof valor !== 'number') return
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar(){
    if(this[_velocidade] >= 100) return
    this[_velocidade]++;
  }

  freiar(){
    if(this[_velocidade] <= 0) return
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
  c1.acelerar();
  console.log(c1);
}

c1.velocidade = 99;
console.log(c1.velocidade);
