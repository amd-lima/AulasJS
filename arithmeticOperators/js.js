/* function getSum(A, B, C) {
  const sum = A + B + C;
  console.log(sum)
   return sum;
 }
 getSum(6, 5, 5);

function getWrongAnswers(N,C) {
  const valor = N;
  const letter = C
  var arrayLetter = '';

  for(let i  = 0; i < valor; i++) {  
    letter.split('')
    letter[i] == "A"?
   arrayLetter += 'B' : arrayLetter += 'A' ;
  };  
  
 console.log(arrayLetter)
  return arrayLetter;
}
getWrongAnswers(3, "ABA") 
 */

/* class Solution {  // JAVA
  
  public double getHitProbability(int R, int C, int[][] G) {
  
  double quant1 = 0;
  double chance = R*C;

  for (int i = 0; i < R; i++){  
    for (int j = 0; j < C; j++) {     
      if(G[i][j] == 1) {
        quant1 +=1;
      } 
    } 
  }
  double total = quant1 / chance;
    
    
    
    return total;
  }
  
} */
/* 
function getMaxAdditionalDinersCount(N, K, M, S) {
  let arr = [];
  let cont = 0;
  let tam = K;
  for(let i = 0; i < N ; i++){
    arr[i] = false;
  }
  arr[M - 1] = true;
  console.log('passei aq')
  for(let i = 0; i < S.length; i++){
    let val = S[i];
    arr[val - 1] = true;
    console.log(val)
  }

    for(let i = 0; i <= N; i++){     
      if(tam > 2){
        if(arr[i] == false && arr[i - tam] == false && arr[i - 1]== false && arr[i + 1]== false && arr[i + tam]== false){
            arr[i] = true;      
          }
      }
      if(tam < 2){
        if(arr[i] == false && arr[i - tam] == false && arr[i + tam]== false){
          arr[i] = true;
        }
      }
    }
    if(tam < 2 && arr[arr.length - 1] == false && arr[arr.length -2]  == false){
      arr[arr.length - 1] = true
    }
    for(let i = 0; i < N ; i++){
      if(arr[i] == true){
        cont +=1;
      }
    } 
  console.log(cont)
  console.log(arr)
  console.log(cont - S.length)
  return cont;
}
getMaxAdditionalDinersCount(10,1,2,[2,6]); */

/* var a = parseFloat(gets());
var b = parseFloat(gets());
var mediaA = (a * 3.5 / 11) ;
var mediaB = (b * 7.5 / 11) ;
var media = (mediaA + mediaB);
console.log("MEDIA = " + media.toFixed(5)); */


const A = 0
const B = 5
let total = 0;
for(let i = A; i <= B; i++){
  total += i;
}
console.log(total);

/* let input = gets();
let desconto = parseInt(input);

input = gets();
let precoAntigo = parseInt(input);


let precoNovo = precoAntigo * (desconto / 100);
desconto = precoAntigo - precoNovo;
print(desconto) */