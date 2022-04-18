class contaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Saldo insuficiente =/");
    }
    this._saldo =this._saldo - valor;
    return console.log("Saldo: " + this._saldo);
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return "Saldo: " + this._saldo;
  }
}

class contaCorrente extends contaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class contaPoupanca extends contaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "poupanca";
  }
}

class contaUniversitaria extends contaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "universitaria";
  }
  sacar(valor) {
    if (valor > 500) {
      return console.log(
        "A conta universitaria não pode sacar valores acima de 500 reais"
      );
    }
    this._saldo -= valor;
    return console.log("Saldo: " + this._saldo);
  }
}
