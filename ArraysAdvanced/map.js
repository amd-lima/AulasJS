/* Altera o valor do novo array, 

Exemplo:Dobrar os numeros
*/

const NUM = [5, 8, 10, 9, 54, 3, 4, 15, 47, 2, 13, 1];
const numEmDobro = NUM.map(function (valor) {
  return valor * 2;
});
console.log(numEmDobro);

/* Exercicio
  Para cada elemento:
    - Retorne apenas uma String com o nome da pessoa
    - Remova apenas a chave "nome" do objeto
    - Adicione uma chave id em cada objeto
*/

const pessoas = [
  { nome: "Camila", idade: 62 },
  { nome: "Joana", idade: 27 },
  { nome: "Theo", idade: 95 },
  { nome: "Thiago", idade: 35 },
  { nome: "Julia", idade: 60 },
  { nome: "Bia", idade: 60 },
];
const nome = pessoas.map(function (valor) {
  return valor.nome;
});
console.log(nome); //[ 'Camila', 'Joana', 'Theo', 'Thiago', 'Julia', 'Bia' ]

const idade = pessoas.map(function (obj) {
  return obj.idade; //[ 62, 27, 95, 35, 60, 60 ]
});
console.log(idade)

const comId = pessoas.map(function (obj, indice) {
  obj.id = indice;
  return obj;
});
console.log(comId);
/*
  { nome: 'Camila', idade: 62, id: 0 },
  { nome: 'Joana', idade: 27, id: 1 },
  { nome: 'Theo', idade: 95, id: 2 },
  { nome: 'Thiago', idade: 35, id: 3 },
  { nome: 'Julia', idade: 60, id: 4 },
  { nome: 'Bia', idade: 60, id: 5 }

*/