
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();   
        const inputPeso = e.target.querySelector('#peso')
        const inputAltura = e.target.querySelector('#altura')

        console.log(inputPeso,inputAltura);
    
        const peso = Number (inputPeso.value);
        const altura = Number (inputAltura.value);
        const result = peso / (altura * 2);

        console.log(result);

        setResultado();

    
});


    function setResultado (msg){
        const inputPeso = document.querySelector('#peso')
        const inputAltura = document.querySelector('#altura')
    
        const peso = Number (inputPeso.value);
        const altura = Number (inputAltura.value);
        const result = Number (peso / (altura * altura));

        console.log(result);
    
    
        if (result <= 18.5){
            msg =  resultado.innerHTML = `Your IMC is <strong> ${result.toFixed(2)}</strong>, you are Under weight!!!`
        }else if (result > 18.5 && result <= 24.9){
            msg =   resultado.innerHTML = `Your IMC is <strong> ${result.toFixed(2)}</strong>, you are Normal weight!!!`
        }else if (result > 24.9 && result <= 29.9){
            msg =  resultado.innerHTML = `Your IMC is <strong> ${result.toFixed(2)}</strong>, you are Overweight !!!`
        }else if (result > 29.9 && result <= 34.9){
            msg =   resultado.innerHTML = `Your IMC is <strong> ${result.toFixed(2)}</strong>, you are Grade 1 obesity !!!`
        }else if (result > 34.9 && result <= 39.9){
            msg =  resultado.innerHTML = `Your IMC is <strong> ${result.toFixed(2)}</strong>, you are Grade 2 obesity !!!`
        }else if (result > 39,91){
            msg = resultado.innerHTML = `Your IMC is <strong> ${result.toFixed(2)} </strong>, you are Grade 3 obesity !!!`
        }else{
            msg = resultado.innerHTML = `Invalid valor !!!`
        }
        console.log(msg);
       return msg;
    }
    
    




