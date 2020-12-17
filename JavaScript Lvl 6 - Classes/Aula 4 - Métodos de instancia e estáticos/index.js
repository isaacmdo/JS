class ControleRemoto {
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instancia
  aumentarVolume(){
    this.volume += 2;
  }

  diminuirVolume(){
    this.volume -= 2;
  }

  //Método estático
  static trocaPilha(){
    console.log('OK, vou trocar');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);

//Podemos acessar o metodo estatico sem instanciar a classe, porem não temos acesso aos dados da classe
ControleRemoto.trocaPilha();

//Resumidamento um método estático é uma "função" que está inseriada dentro de uma classe, e podemos
//acessa-la do "lado de fora", sem instanciar a classe (com a palavra new, sem usar o constructor).