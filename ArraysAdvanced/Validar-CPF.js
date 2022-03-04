//replace(/\D+/g) --> expressão que representa tudo que não for numero, 
//   (/\D+/g, '') --> tudo que não for um numero vai ser substituido por nada

/* let cpf  = '705,484,450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');

console.log(cpfLimpo) //70548445052 */

function ValidaCpf(cpfEnviado){
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function(){
      return cpfEnviado.replace(/\D+/g, '');
    }
  }); 
}

ValidaCpf.prototype.valida = function(){
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const dig1 = this.criaDigito(cpfParcial);
  const dig2 = this.criaDigito(cpfParcial + dig1);
  
  const novoCpf = cpfParcial + dig1 + dig2;
  console.log(novoCpf);
  return novoCpf === this.cpfLimpo;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;   // = 10
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0)
  let digito = 11 - (total % 11);
  return digito > 9? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
   return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('705.484.450-52'); //705.484.450-52  070.987.720-03 111.111.111-11

if (cpf.valida()) {
  console.log('CPF válido');
 }else{
  console.log('CPF inválido');
 }   

