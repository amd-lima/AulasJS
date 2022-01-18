const relogio = document.querySelector('.relogio');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let segundos = 0;


function getTimeFromSeconds(segundos){
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    });
}

function iniciaRelogio(){
    const timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000)
}


start.addEventListener('click', function(){
    iniciaRelogio();
});
pause.addEventListener('click', function(pauseTimer){
    
    
});
reset.addEventListener('click', function(resetTimer){
    
});