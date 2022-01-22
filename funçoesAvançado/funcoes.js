/*Dentro do () da função tem um parametro chamado arguments, mesmo que não tenha nada declarado
 é possivel capturar dados lá; */
function funcao(){
    for (let argumento of arguments) {
        console.log(argumento) //Valor 1 2 3
    }

}
funcao("Valor",1,2,3)
//Funciona apenas com function, não funciona com arrowFunction
//----------------------------------------------------------------
//desestruturação

function funcao2({nome, sobrenonme, idade}){
    console.log(nome, sobrenonme, idade)  //Joana Madalena 20
                                          // Ana Flavia 30
}
funcao2({nome: 'Joana', sobrenonme:'Madalena', idade: 20});
// ou
let obj = {nome: 'Ana', sobrenonme:'Flavia', idade: 30}
funcao2(obj);
// ou por array
function funcao3([valor1, valor2, valor3]){
    console.log(valor1,valor2,valor3); //Camila Cristina 40
}
funcao3(['Camila','Cristina', 40])

//(valor1, valor2, ...valor3) ...=rest operator. o valor3 terá um array com todos os elementos adicionados depois do 2 parametro passado.
const num = (...args) =>{ console.log(args) }; //[ 1, 2, 3, 4 ]
num(1,2,3,4)