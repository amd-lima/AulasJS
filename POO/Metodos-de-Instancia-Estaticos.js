class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 10;
  }//Metodo de instancia
  aumentarVolume(){
    this.volume +=2;
  }//Metodo de instancia
  diminuirVolume(){
    this.volume -=2;
  }
  //Metodo estatico
  static trocaPilha(){
    console.log('Troque a pilha');
  }
}
const cont1 = new ControleRemoto('LG');
console.log(cont1); //{ tv: 'LG', volume: 10 }
cont1.aumentarVolume();
cont1.aumentarVolume();
cont1.aumentarVolume();
console.log(cont1); //ControleRemoto { tv: 'LG', volume: 16 }
//cont1.trocaPilha(); --> (TypeError: cont1.trocaPilha is not a function) Não é possivel instanciar no objeto, apenas na classe
ControleRemoto.trocaPilha(); //Troque a pilha