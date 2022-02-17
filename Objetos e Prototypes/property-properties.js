/* Para congelar uma parte apenas do objeto utiliza-se:
define property -> uma propriedade
define properties -> varias
*/

 //define property
function produto(nome, preco, estoque){
  this.nome = nome; //Variavel publica
  this.preco = preco; //Variavel publica

  Object.defineProperty(this, 'estoque',{
    enumerable:true, // mostra a chave
    value: estoque,  //add valor na propriedade estoque
    writable: false, // valor não pode ser alterado  / true pode ser alterado
    configurable: true, // configuravel. Caso queira copiar esse trecho e reescrevelo é possivel. / false não é possivel reescrever ou apagar.
  });

}
const p1 = new produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); //chaves  = [ 'nome', 'preco', 'estoque' ] enumerable:true / [ 'nome', 'preco'] enumerable:false

//define properties
function produto2(nome, preco, estoque){

  Object.defineProperties(this, {
    nome: {
      enumerable:true, // mostra a chave
      value: nome,  //add valor na propriedade estoque
      writable: true, // valor não pode ser alterado  / true pode ser alterado
      configurable: true, // configuravel. Caso queira copiar esse trecho e reescrevelo é possivel. / false não é possivel reescrever ou apagar.
    },
    preco: {
      enumerable:true, // mostra a chave
      value: preco,  //add valor na propriedade estoque
      writable: true, // valor não pode ser alterado  / true pode ser alterado
      configurable: true, // configuravel. Caso queira copiar esse trecho e reescrevelo é possivel. / false não é possivel reescrever ou apagar.
    },
  });
}
const p2 = new produto2('Calça', 40, 30);
console.log(p2);
console.log(Object.keys(p2));