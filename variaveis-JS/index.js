// Não utilizar var e sim let.

let nome = 'João';
var nome2 = 'Maria';

console.log(nome, 'nasceu em 1984.');
console.log(nome, 'casou-se com', nome2);
console.log(nome2, 'teve 1 filho com', nome);
console.log('O filho de', nome, 'e chama Eduardo!');

//constante
// a constante já tem que ser declarada na criação dela.
const nome3 = 'Joana';

const number1 = 2;
const number2 = 4;
const number3 = number1+number2;
console.log(number3)
console.log(typeof(number1)) //saber o tipo da variavel

//---------Exercicio------------
let sobrenome = 'Miranda';
let peso = 84;
let altura = 1.8;
let imc = peso / (altura * altura);
let idade = 30;


console.log(nome,sobrenome,'tem 30 anos, pesa',peso,'Kilos, tem',altura,'e seu imc é de',imc);
console.log(`${nome} nasceu em ${(2021 - idade)}`);
//João Miranda tem 30 anos, pesa 84 tem 1.8 e seu imc é de 25.925925925925924
//João nasceu em 1991


//atribuindo o valor de B ao A do C ao B e do A ao C
const valA = 'A';
const valB = 'B';
const valC = 'C';

let a = valB;
let b = valC;
let C = valA;
console.log(a,b,C) // B C A

//outra maneira de organizar as letras
let vala = 'A';
let valb = 'B';
let valc = 'C';
[vala, valb, valc] = [valb, valc, vala]
console.log(vala, valb, valc) // B C A



