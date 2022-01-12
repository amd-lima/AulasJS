//Data é formada por milésimos de segundos
// mês começa no 0. 0 = Janeiro, 1 = fevereiro
// dia da semana Domingo = 0;

const data = new Date();
console.log(data)                      //2022-01-11T23:22:23.548Z
console.log(data.toString())           //Tue Jan 11 2022 20:23:35 GMT-0300 (Horário Padrão de Brasília)

const data1 = new Date(0);             //Timestamp unix -- 01/01/1970
const oneDay = 60 * 60 * 24 * 1000;    //(60 seg * 60 min * 24 horas * 1000 miliseg) = 1 dia
const data2 = new Date(data + oneDay);
console.log(data2 )                     //02/01/1970

// Tem que ter no minimo 2 parametros p/ esse tipo de declaração. Ele começa pegando de traz p/ frente
const data3 = new Date(2022, 1, 10, 20, 38, 15, 998); 
console.log(data3.toString()) // Thu Feb 10 2022 20:38:15 GMT-0300 (Horário Padrão de Brasília)

//data string --> o mês começa em 1 mesmo, pois é uma string
const data4 = new Date('2021-01-11') // 2021-01-11T00:00:00.000
console.log(data4)

// Get date

console.log('Day',     data.getDate());         //Day 11
console.log('Month',   data.getMonth());        //Month 0
console.log('Year',    data.getFullYear());     //Year 2022
console.log('Hour',    data.getHours());        //Hour 20
console.log('Min',     data.getMinutes());      //Min 55
console.log('Sec',     data.getSeconds());      //Sec 16
console.log('Mili',    data.getMilliseconds()); //Mili 424
console.log('Weekday', data.getDay());          //Weekday 2 
//Caso quei o mês com o numero exato pode-se colocar +1 data.getMonth() +1; : 

//Pegar o milésimo de segundo, desde a data 0 até agora
console.log(Date.now()); // 1641945596695

//Formatar hora
function zeroToLeft(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const day = zeroToLeft(data.getDate());  
    const month = zeroToLeft(data.getMonth() + 1);  
    const year = zeroToLeft(data.getFullYear());  
    const hour = zeroToLeft(data.getHours());  
    const min = zeroToLeft(data.getMinutes());  
    const sec = zeroToLeft(data.getSeconds());  

    return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
}

const data5 = new Date();
const dataBrasil =formataData(data5);
console.log(dataBrasil); // 11/01/2022 21:14:32