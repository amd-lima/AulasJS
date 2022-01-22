/* Funçoes podem ou não retornar valor!

    Return
- Retorna um valor
- Termina a função
*/
function soma(a, b){
    return a+b;
}
//diferente  do console.log. o return retorna um valor, enquanto o console.log apenas mostra

//Closer
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}
const duplica= criaMultiplicador(2);
const triplica= criaMultiplicador(3);
const quadriplica= criaMultiplicador(4);

console.log(duplica(2));     //4
console.log(triplica(2));    //6
console.log(quadriplica(2)); //8