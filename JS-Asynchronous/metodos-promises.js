/* 
  Promise.all - resolve todas - se uma der errado ele rejeita todas
  Promise.race - sempre entrega o primeiro valor independente se é ou não uma promise. Entrega a primeira, mas continua executando
  Promise.resolve - verifica e resolve
  Promise.reject - verifica e rejeira
*/

function waitIA(msg, time) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string'){
      reject(false);
      return;
    } 

    setTimeout(() => {
    //  console.log(msg);
      resolve(msg.toUpperCase() + ' - passei na promisse');
    }, time);
  });
}

//-------------- Promisse.all -------------------
  const promises = [
    'Primeiro valor',
    waitIA('Promise 1', 3000),
    waitIA('Promise 2', 1500),
    waitIA('Promise 3', 1000),
    'outro valor'
  ];
  Promise.all(promises).then(valor =>{
    console.log(valor);
  }).catch(e =>{
    console.log('ERRO:', e);
  });
/* [
  'Primeiro valor',
  'PROMISE 1 - passei na promisse',
  'PROMISE 2 - passei na promisse',
  'PROMISE 3 - passei na promisse',
  'outro valor'
] */

//------------- Promise.race --------------------
  const promisesRace = [
    waitIA('Promise 1', 3000),
    waitIA('Promise 2', 1500),
    waitIA('Promise 3', 1000),
  ];
  Promise.race(promisesRace).then(valor =>{
    console.log(valor);
  }).catch(e =>{
    console.log('ERRO:', e);
  });
  //PROMISE 3 - passei na promisse

//----------------- Promise.resolve ----------------------
function baixaPagina(){
  let emCache = true; 

  if(emCache){
    return Promise.reject('Pagina em cache'); //erro: Pagina em cache 
          //Promise.resolve => Pagina em cache
  }else{
    return waitIA('Baixei a pagina', 3000);
    //if false : BAIXEI A PAGINA - passei na promisse
  }
}
baixaPagina()
  .then(dadosDaPagina =>{
    console.log(dadosDaPagina);
  })
  .catch(e => console.log('erro:',e));
 