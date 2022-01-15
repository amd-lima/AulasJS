
// REST OPERATOR - SPREAD OPERATOR

const numeros = [1000, 2000, 3000, 4000, 5000, 6000];

const[firstNum, secondNum, ...rest ] = numeros;
console.log(firstNum, secondNum) //1000 2000
console.log(rest)                //[ 3000, 4000, 5000, 6000 ]

const [um, , dois, , tres] = numeros;
console.log(um, dois, tres) //1000 3000 5000


//               0          1         2
//            0  1  2    0  1  2    0  1  2   
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// print 6
console.log(num[1][2])
//get 6
const [,[,,seis]] = num;  //6
console.log(seis); 