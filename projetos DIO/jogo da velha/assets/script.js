
let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById("jogador-selecionado");
let vencedorSelecionado = document.getElementById("vencedor-selecionado");



mudarJogador('X');

function escolherQuadrado(id){

  if(vencedor !== null){
    return;
  }

  var quadrado = document.getElementById(id);

  if(quadrado.innerHTML !== '-'){
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#31044c';

  if(jogador === 'X'){
    jogador = 'O';
  }else{
    jogador = 'X';
  }
  mudarJogador(jogador);
  checaVencedor();
}

function mudarJogador(valor){
  jogador = valor
  jogadorSelecionado.innerHTML = jogador;
}
let quad1 = document.getElementById('1')
console.log(quad1)

function checaVencedor() { 
  let quad1 = document.getElementById('1')
  let quad2 = document.getElementById('2')
  let quad3 = document.getElementById('3')
  let quad4 = document.getElementById('4')
  let quad5 = document.getElementById('5')
  let quad6 = document.getElementById('6')
  let quad7 = document.getElementById('7')
  let quad8 = document.getElementById('8')
  let quad9 = document.getElementById('9')
  
  if(checaSequencia1(quad1, quad2, quad3)){
    mudaCor(quad1, quad2, quad3);
    mudarVencedor(quad1);
    return;
  }
  if(checaSequencia1(quad4, quad5, quad6)){
    mudaCor(quad4, quad5, quad6);
    mudarVencedor(quad4);
    return;
  }
  if(checaSequencia1(quad7, quad8, quad9)){
    mudaCor(quad7, quad8, quad9);
    mudarVencedor(quad7);
    return;
  }
  if(checaSequencia1(quad1, quad4, quad7)){
    mudaCor(quad1, quad4, quad7);
    mudarVencedor(quad1);
    return;
  }
  if(checaSequencia1(quad2, quad5, quad8)){
    mudaCor(quad2, quad5, quad8);
    mudarVencedor(quad2);
    return;
  }
  if(checaSequencia1(quad3, quad6, quad9)){
    mudaCor(quad3, quad6, quad9);
    mudarVencedor(quad3);
    return;
  }
  if(checaSequencia1(quad1, quad5, quad9)){
    mudaCor(quad1, quad5, quad9);
    mudarVencedor(quad1);
    return;
  }
  if(checaSequencia1(quad3, quad5, quad7)){
    mudaCor(quad3, quad5, quad7);
    mudarVencedor(quad3);
    return;
  }
}


function mudarVencedor(quadrado) {  
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudaCor(quad1, quad2, quad3){
  quad1.style.background = '#0f0';
  quad2.style.background = '#0f0';
  quad3.style.background = '#0f0';
}




function checaSequencia1(quad1, quad2, quad3){
  var isEqual = false;
  if(quad1.innerHTML !== '-'){
    if(quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML ){
        isEqual = true; 
      } 
  }
  return isEqual;
}

function reiniciar(){
  vencedor = null;
  vencedorSelecionado.innerHTML = '';
  for(let i = 1; i <= 9; i++){
    let quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee';
    quadrado.innerHTML = '-';
  }
  mudarJogador('X');
}
