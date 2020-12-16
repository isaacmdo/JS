class DispositivoEletronico {
  constructor(nome){
    this.nome = nome;
    this.ligado = false;

  }

  ligar(){
    if(this.ligado){
      console.log(this.nome + ' já ligado');
      return;
    }

    this.ligado = true;
  }

  desligar(){
    if(!this.ligado){
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo){
    super(nome);//função super significa chama um atributo da classe pai
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('iPhone', 'Preto', '11 PRO');

s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi){
    super(nome);
    this.temWifi = temWifi;
  }

  ligar(){
    console.log('Voce alterou o método ligar');
  }
}

const t1 = new Tablet ('iPad', true);
console.log(t1.ligado);
t1.ligar();

//As classes filhas herdão das classes pai, mas as classes pai, não herdão nada das filhas