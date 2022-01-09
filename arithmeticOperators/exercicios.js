let numero = prompt('Digite um número:');
const numTitulo = document.getElementById('numero-ttulo');
let numtexto = document.getElementById('texto');
numero = Number(numero)
numTitulo.innerHTML = `${numero} </br> ` ;
numtexto.innerHTML = ` A raiz quadrada do seu número é: <strong>${numero ** 0.5} </strong> <br/>
É um inteiro: <strong>${Number.isInteger(numero)} </strong> <br/>
É NaN: <strong> ${Number.isNaN(numero)} </strong> <br/> 
Arredondamento da raiz para baixo: <strong> ${Math.round(Math.floor(numero ** 0.5))} </strong> <br/>
Arredondamento da raiz para cima: <strong>${Math.round(Math.ceil(numero ** 0.5))}</strong>  <br/> `