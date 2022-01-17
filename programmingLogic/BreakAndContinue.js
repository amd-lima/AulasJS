//Continue quebra o laço e continua no proxima iteração

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of num){
    
    if( numero === 2){
        console.log('pulei o 2');
        continue;
    }
    if( numero === 5){
        console.log('achei o 5 e sai');
        break;
    }

    console.log(numero);
}