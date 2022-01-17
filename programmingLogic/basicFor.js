/*
    FOR Classico -> Geralmente com iteráveis (Arrays ou Strings)
    FOR IN -> Retorna o índice ou chave (Objetos, Arrays ou Strings)
    FOR OF -> Retorna o valor em si (Iteraveis, Arrays ou Strings)
*/
// -------------FOR----------------------
for (let i = 0; i <= 5; i++){
    console.log(`linha: ${i}`);
    const par = i % 2 ===0 ? 'par' : 'impar';
    console.log(par);
}

const fruits = ['banana','pear','melon']
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// FOR IN  --> Lê os indices ou chaves do objeto.

const frutas = ['pera', 'maça','banana'];

for(let i in frutas){
    console.log(frutas[i]) //pera maça banana
}

const pessoa = {
    nome: 'Joana',
    sobrenome: "D'Arc",
    endereco: "av 123"
}
for(let chave in pessoa){
    console.log(chave);   //nome sobrenome, endereco
}
for(let chave in pessoa){
    console.log(pessoa[chave]);   //Joana D'Arc  av 123
}
for(let chave in pessoa){
    console.log(chave,pessoa[chave]);   //nome Joana  sobrenome D'Arc  endereco av 123
}
 //FOR OF
 for(let valor of frutas){
     console.log(valor);   //pera maça banana
 }

 // FOR EACH
 frutas.forEach(function(valor, indice,array){
     console.log(valor);              //pera maça banana
     console.log(valor,indice);       //pera 0 maça 1 banana 2
     console.log(valor,indice,array); //pera 0 [ 'pera', 'maça', 'banana' ] maça 1 [ 'pera', 'maça', 'banana' ]
 });