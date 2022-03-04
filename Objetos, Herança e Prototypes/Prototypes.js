/* JS é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
  - É um termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde  para as 
  futuras produções.
  
  - Todos os objetos tem uma referencia interna para um protótipo (_proto_)  que vem da propriedade prototype 
  da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto,
  primeiro motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de 
  protótipos é usada até o topo (null) até encontrar (ou não) tal membro. 

*/
  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }
  Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
  }
  //o objeto pessoa alem de ter nome e sobrenome tambem possui nome completo.

//  ADICIONANDO COMO PROTOTYPE CHAVE DE OUTRO OBJETO:
  const objA = {
    chaveA: 'A'    //_proto_: object.prototype
  };
  const objb = {
    chaveb: 'B' //_proto_: objA
  };
  Object.setPrototypeOf(objb,objA);
  console.log(objb.chaveA); //A

//acrescentar desconto usando prototype:
  function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
  }

  Produto.prototype.desconto = function (percentual) {  
    this.preco = this.preco - (this.preco * (percentual / 100));
  }

  const p1 = new Produto('camiseta', 50);
  console.log(p1); //nome: 'camiseta', preco: 50
  p1.desconto(10);
  console.log(p1); //nome: 'camiseta', preco: 45

//Literal
  const p2 = {
    nome: 'caneca',
    preco: 15
  }; // ñ faz parte do obj produto, para que seja adicionado o desconto em outro obj, utiliza-se o prototype;
  Object.setPrototypeOf(p2,Produto.prototype);
  p2.desconto(20);
  console.log(p2); // nome: 'caneca', preco: 12