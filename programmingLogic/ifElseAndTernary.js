const hora = 50;

if (hora <= 12){
    console.log('Good Morning');

} else if (hora > 12  && hora <= 16){
    console.log('Good Afternoon');

}else if (hora > 16 && hora <= 24){
    console.log('Good night');

}else{
    console.log('Invalid Hour.')
}

const numero = 10;

//--------------Ternary Operator------------

// ? : (if / else)

const scoreUser = 999;
const levelUser = scoreUser >= 1000 ? 'Vip' : 'normal';
//                               if -> true  /  else 
console.log(levelUser) // = normal

