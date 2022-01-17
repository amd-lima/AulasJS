// -----------While-------------

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let rand = random(10,30);


while(rand !== 10){
    rand = random(1, 20)
    console.log(rand)
}
console.log('---------------');
//----------DO WHILE --------------
do{
    let rand = random(1,30);
    console.log(rand);

}while(rand !== 10)