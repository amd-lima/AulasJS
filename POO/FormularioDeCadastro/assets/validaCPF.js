class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const dig1 = ValidaCPF.geraDig(cpfSemDigitos);
    const dig2 = ValidaCPF.geraDig(cpfSemDigitos + dig1);
    this.novoCpf = cpfSemDigitos + dig1 + dig2;
  }

  static geraDig(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let num of cpfSemDigitos) {
      total += reverso * Number(num);
      reverso--;
    }
    const dig = 11 - (total % 11);
    return dig <= 9 ? dig : "0";
  }
}
