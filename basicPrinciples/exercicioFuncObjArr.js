function myScope() {  
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    function recebeEventoForm (evento){
        evento.preventDefault ();
       const name = form.querySelector('.name');
       const lastName = form.querySelector('.lastName');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({
           name:name.value, 
           lastName: lastName.value, 
           peso: peso.value, 
           altura: altura.value
        });
        console.log(pessoas);
       resultado.innerHTML += `<p>Name: ${name.value} </br> Last Name: ${lastName.value}</br>Weight:  ${peso.value}</br>Height:  ${altura.value}</p>`;
    }
    /*form.onsubmit = function (evento){
        evento.preventDefault();
        console.log('Não atualizou a página');
    }
    */ 
    form.addEventListener('submit', recebeEventoForm);
}
myScope();