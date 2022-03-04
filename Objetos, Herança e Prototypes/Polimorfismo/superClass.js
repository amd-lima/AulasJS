function Conta(agencia, conta, saldo) {  
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);    
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function(){
  console.log(`ag/c: ${this.agencia} - ${this.conta}  |` +
  ` Saldo: R$ ${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta (11, 1111, 500);
console.log(conta1);

conta1.depositar(70);

conta1.sacar(5000);

console.log('**************** conta corrente **********************')


function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
  if ((this.saldo + this.limite) < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);    
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(22,3333,500,1000);
console.log(cc);

cc.depositar(10);
cc.sacar(600);