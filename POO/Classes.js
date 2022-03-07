//Mais simples do que fazer com function usando o prototype.
class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  } 
  //metodos
  falar(){
    console.log(`${this.nome} está falando`)
  }
  comer(){
    console.log(`${this.nome} está comendo`)
  }
}

const p1 = new Pessoa('Carmem', 'Miranda');
console.log(p1.falar());