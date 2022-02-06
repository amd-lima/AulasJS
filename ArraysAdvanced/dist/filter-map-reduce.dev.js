"use strict";

// FILTER  -> filtra o array
// modo mais longo -> Retornar para outra variavel numeros maiores que 10
var NUM = [5, 8, 10, 9, 54, 3, 4, 15, 47, 2, 13, 1];

function callbackfilter(valor, indice) {
  return valor > 10 ? true : false;
}

var NUM2 = NUM.filter(callbackfilter);
console.log(NUM2); //[ 54, 15, 47, 13 ]
//MODO MAIS SIMPLIFICADO -> Retornar numeros maiores que 6

var NUM3 = NUM.filter(function (valor) {
  return valor > 6;
});
console.log(NUM3); //[ 8, 10,  9, 54, 15, 47, 13]
//Este método tambem pode retornar (valor, indice,array);

/* Exercicio
- Retornar as pessoas que:
    - tem nome com 5 letras ou mais
    - mais de 50 anos
    - tem o nome terminando com  a letra A
*/

var PESSOAS = [{
  nome: 'Camila',
  idade: 62
}, {
  nome: 'Joana',
  idade: 27
}, {
  nome: 'Theo',
  idade: 95
}, {
  nome: 'Thiago',
  idade: 35
}, {
  nome: 'Julia',
  idade: 60
}, {
  nome: 'Bia',
  idade: 60
}];
var PESSOAS_QUANT_LETRAS = PESSOAS.filter(function (valor) {
  return valor.nome.length >= 5;
});
console.log(PESSOAS_QUANT_LETRAS);
var IDADE = PESSOAS.filter(function (valor) {
  return valor.idade >= 50;
});
console.log(IDADE);
var TERMINA_COM_A = PESSOAS.filter(function (valor) {
  return valor.nome.endsWith('a');
});
console.log(TERMINA_COM_A);