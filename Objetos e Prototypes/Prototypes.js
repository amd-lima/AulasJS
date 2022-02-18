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