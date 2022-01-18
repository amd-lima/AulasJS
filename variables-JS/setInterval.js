function retornaHora(){
    data = new Date();
    
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

/*function funcaoDoInterval(){
    console.log(retornaHora());
}
setInterval(funcaoDoInterval, 1000); //1 segundo
*/
const timer = setInterval(function(){
    console.log(retornaHora()); 
}, 1000); //1 segundo
setTimeout(function(){
    clearInterval(timer);
}, 5000) //stop after 5 seconds