//Função recursiva é uma função que chama ela mesma.
//Ter cuidado pq tem limite.

function recursiva(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(8);


//--------------------Geradoras----------------------------------
//entrega por partes, como se pudesse pausar
//yieldfaz o mesmo que o return mas não sai da função
// O yield pode ser tambem funções dentro do bloco: yield function(){console.log('Vim do y1');}
function* geradora1(){
    //codigo qualquer
    yield 'valor1...';
    //mais codigo 
    yield 'valor2...';
    //outro codigo
    yield 'valor3...';
}
const g1 = geradora1();
console.log(g1); //Object [Generator] {}
console.log(g1.next()); // { value: 'valor1...', done: false } //done é falso, pq ainda não terminou.
console.log(g1.next().value); // valor2...
console.log(g1.next().value); // valor3...
console.log(g1.next()); // { value: undefined, done: true } 

//For consegue pegar todos os valores.
const g2 = geradora1();
for( let valor of g2){
    console.log(valor);
    /*
    valor1...
    valor2...
    valor3...
    */

}
//chamando uma função dentro da outra
function* geradora2(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora3(){
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}
const g3 = geradora3();
for(let valor of g3){
    console.log(valor);
} //012345