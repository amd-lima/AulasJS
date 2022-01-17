//Ler 2 numeros e retornar o maior

function max(x, y) {
    return x > y ? x : y;
}
console.log(max(300, 200));

// Using Arrow
const max2 = (x, y) => x > y ? x : y;
console.log(max2(700,600))

/*Escreva uma função chamada Paisagem, que receba 2 argumentos:
Altura e largura de uma imagem (number)
Retorne true se estiver no modo paisagem e false se não estiver.
*/

const paisagem = (a, l) => l > a;
console.log(paisagem(400,600))

/*Escreva uma função que recebe um número e retorne o seguinte:
Se for divisivel por 3 = Fizz
Se for divisivel por 5 = Buzz
Se for divisivel por 3 e 5 = FizzBuzz
Não for dividivel por 3 e 5, retorne o próprio numero.
Use numeros de 0 a 100.
*/

for( let i = 1; i <= 100 ; i++){
    
    if((i % 5 == 0) &&  (i % 3 == 0) ){
        console.log(i, ' FizzBuzz')
    }
    else if(i % 3 == 0){
        console.log(i, ' Fizz')
    }
    else if(i % 5 == 0 ){
        console.log(i, ' Buzz')
    }
    else{
        console.log(i)
    }

}