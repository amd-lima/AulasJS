class DispositivoEletronico{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }
  ligar(){
    if (this.ligado) return;
    this.ligado = true;
  }
  desligar(){
    this.ligado = false;
  }
}
class Smartphone extends DispositivoEletronico{
  constructor(nome, cor){
    super(nome); //chama o construtor da classe pai (DispositivoEletronico)
    this.cor = cor;
  }
  desligar(){
    console.log('Bye'); //visivel apenas dentro desta classe, não se aplica a classe pai.
  }
}


const s1 = new Smartphone('IPhone', 'preto');
console.log(s1); //Smartphone { nome: 'IPhone', ligado: false, cor: 'preto' }

s1.desligar(); //Bye
