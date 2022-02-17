/* Reduce - utilizado para redizir o array para um unico elemento.

    EXEMPLO:    
    - Soma todos os números (reduce)
    - Retorne um Array com os pares  (filter)
    - Retorne um array com o dobro dos valores (map)
    - Retorne a pessoa mais velha
*/
//- Soma todos os números (reduce)
const NUM = [5,8,10,9,54,3,4,15,47,2,13,1];
const TOTAL = NUM.reduce(function(acumulador, valor, indice, array){
  acumulador += valor
  console.log(acumulador, valor)
  return acumulador

},0); // --> valor inicial do acumulador
console.log(TOTAL);

// - Retorne um Array com os pares  (filter)
const TotalPar = NUM.reduce(function(acumulador, valor){
  if (valor % 2 == 0 ){
    acumulador += valor;
  } 
  console.log(acumulador, valor)
  return acumulador

},0); // --> valor inicial do acumulador
console.log(TotalPar); //78

//- Retorne um array com o dobro dos valores (map)
const dobro = NUM.reduce(function(acumulador, valor){
  acumulador += valor;
  return acumulador;
},0);
console.log(dobro * 2);

//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Camila", idade: 62 },
  { nome: "Joana", idade: 27 },
  { nome: "Theo", idade: 25 },
  { nome: "Thiago", idade: 35 },
  { nome: "Julia", idade: 90 },
  { nome: "Bia", idade: 60 },
];
const maisVelho = pessoas.reduce(function(acumulador, valor){
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelho); // { nome: 'Julia', idade: 90 }