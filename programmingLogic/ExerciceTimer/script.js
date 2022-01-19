const relogio = document.querySelector('.relogio');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let segundos = 0;
let timer;

function getTimeFromSeconds(segundos){
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    });
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000)
}


start.addEventListener('click', function(){
    iniciaRelogio();
    relogio.style.color = 'black';
});
pause.addEventListener('click', function(){
    relogio.innerHTML = getTimeFromSeconds(segundos);
    setTimeout(function(){
        clearInterval(timer);
    });
    
});
reset.addEventListener('click', function(){
    setTimeout(function(){
        clearInterval(timer);
    });
    relogio.style.color = 'red';
    segundos = 0;
});

//Feito pelo professor
/*
function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
relogio();
*/