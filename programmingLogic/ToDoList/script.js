const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li'); 
    return li;
}
function criaBotaoApagar(li){
    li.innerHTML+= ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Delete';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Delete this task');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){  
    const li = criaLi();
    li.innerHTML = textoInput;  
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
    
}
function limpaInput(){
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let t of liTarefas){
        let ttexto = t.innerText;
        ttexto = ttexto.replace('Delete', ' ').trim();
        listaDeTarefas.push(ttexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('ttexto',tarefasJSON);
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('ttexto');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let t of listaDeTarefas){
        criaTarefa(t);
    }
}


inputNovaTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value);
        limpaInput();
        
    }
});

btnAddTarefa.addEventListener('click', function(){
    if(!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
    limpaInput();
    
});

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})
addTarefasSalvas()
