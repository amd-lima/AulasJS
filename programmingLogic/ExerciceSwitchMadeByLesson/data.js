const h2 = document.querySelector('.container h2');
const dt = new Date();
 
let options = {
    dateStyle:'full',
    timeStyle:'short'
};
h2.innerHTML = dt.toLocaleDateString('pt-BR', options)
