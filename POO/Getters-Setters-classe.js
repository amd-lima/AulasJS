//Para proteger a velocidade e não ser  possivel c1.velocidade = 1500 por exemplo,
//vamos utilizar Symbol = gera um ID aleatório.
const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");

for (let i = 0; i <= 110; i++) {
  c1.acelerar();
}
console.log(c1); //Carro { nome: 'Fusca', velocidade: 100 }

c1.velocidade = 99;
console.log(c1.velocidade); //99

//********************* OUTRO EXEMPLO DE GET E SET ********************

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto(){
    return this.nome + ' ' + this.sobrenome;
  }
  set nomeCompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa ('Bia', 'Santos');
console.log(p1.nomeCompleto); // (get) = Bia Santos

p1.nomeCompleto = 'Josh Oliveira Souza'; //(set)
console.log(p1.nomeCompleto); //Josh Oliveira Souza
console.log(p1.nome); //Josh
console.log(p1.sobrenome); //Oliveira Souza