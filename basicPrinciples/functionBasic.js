function hello() {
    console.log('Hello world!!!')
  }
hello();

function morning(nome){
    return `Good morning ${nome}`
}

let nome = morning('Lívia')
console.log(nome);

function soma(x, y){
    const resultado = x + y;
    return  resultado;
}
console.log(soma(2,2));
console.log(soma('Maitê',' Lima')); // Maitê Lima

 const raiz = function (n){
     return n ** 0.5;
 }; //fechar com ;
 console.log(raiz(9))

 //------------- new way to create function----------------
    /*
    const mult = (m) => {
        return m ** 0.5;
    };
    */
    const mult = m => m **0.5;
    console.log(mult(9));
