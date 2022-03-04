//colocando propriedades junto ao defineProperty
function produto(nome, preco, estoque){
  this.nome = nome; 
  this.preco = preco; 

  Object.defineProperty(this, 'estoque',{
    enumerable:true,  
    configurable: true, 
    get: function(){
      return estoque;
    },
    set: function(valor){
      if(typeof valor !== 'number'){
        console.log('valor invalido. Digite apenas numeros');
        return;
      }
      estoque = valor;
    }
  });

}
const p1 = new produto('Camiseta', 20, 3);
console.log(p1); //{ nome: 'Camiseta', preco: 20, estoque: [Getter] }
console.log(p1.estoque); //3

p1.estoque = 'outro valor';
console.log(p1.estoque); //valor invalido. Digite apenas numeros

//factory function

function criaProduto(nome){
  return{
    get nome(){
      return nome;
    },
    set nome(valor){
      nome = valor;
    }
  };
}

const p2 = criaProduto('Vestido');
console.log(p2.nome) //Vestido

