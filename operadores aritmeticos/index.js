/*------------OPERADORES ARITMETICOS-----------
+ --> SOMA OU CONCATENAÇÃO
- --> SUBTRAÇÃO
/ --> DIVISÃO
* --> MULTIPLICAÇÃO
** --> POTENCIAÇÃO
% --> RESTO MOD
*/

/*--------------PRECEDENCIA---------------------
()
**
* / %
+ -
*/

/*-------------ATRIBUIÇÃO------------------------
 CONTADOR++/--  OU --/++CONTADOR
 += SOMA UM NUMERO OU VARIAVEL
 -= SUBTRAI UM NUMERO OU VARIAVEL
 *= OU /= OU **= 
 */

 // ------------CONVERTER STRING P/ INT----------------
 let num = '5'; //string
 num = parseInt(num);
 console.log(typeof num)
 /*
    Pode ser parseInt, parseFloat ou apenas number
    num = number(num)
 */

//-------------CONVERTER NUMEROS P/ STRING-----------
console.log(num.toString()+2); //52 --> numero p/ string e concatena --> não altera o tipo da variavel
num = num.toString();
console.log(typeof(num)) //String

//-------------ARREDONDAR NUMEROS-----------
num2 = 10.5566852189
console.log(num2.toFixed(2)) //10.56  --> não altera o valor, apenas arredonda pra mostrar
num2 = parseFloat(num2.toFixed(2)) // arredondar com precisão,0



//---------------SABER SE O NUMERO É UM INTEIRO----------------
console.log(Number.isInteger(num2)) //false
console.log(Number.isFinite(num2))  //true
console.log(Number.isNaN(num))      //false
