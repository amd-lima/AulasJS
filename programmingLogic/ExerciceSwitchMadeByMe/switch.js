const h1 = document.querySelector('.container h1');
const h2 = document.querySelector('.container h2');

const date = new Date();
console.log(date)
const day = date.getDay();

const weekDay = ['Rest a little','Please come back Weekend', 'Second day, Stay Strong', 'Half the week has passed', 
'Almost there', "OMG It's friday", "Let's go to the beach" ]

const mes = ['January', 'February', 'March', 'Aprir', 'May','June', 'July','August','September', 'October','November','December']
let recebeMes = mes[(date.getMonth())];

h2.innerHTML = `${recebeMes} ${date.getDate()}, ${date.getFullYear()}. `

switch(day){
    case 0 :
        h1.innerHTML = weekDay[0]
        console.log(weekDay[0])
        break;
    case 1 :
        h1.innerHTML = weekDay[1]
        console.log(weekDay[1])
         break;
    case 2 :
        h1.innerHTML = weekDay[2]
        console.log(weekDay[2])
        break;
    case 3 :
        h1.innerHTML = weekDay[3]
        console.log(weekDay[3])
        break;
    case 4 :
        console.log(weekDay[4])
        break;
    case 5 :
        h1.innerHTML = weekDay[5]
        console.log(weekDay[5])
        break;
    case  6 :
        h1.innerHTML = weekDay[6]
        console.log(weekDay[6])
        break;
}

