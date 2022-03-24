function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitIA(msg, time) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') reject('bad value')

    setTimeout(() => {
    //  console.log(msg);
      resolve(msg);
    }, time);
  });
}

async function executa(){
  try{
    const fase1 = await waitIA('Fase 1', rand());
    console.log(fase1);

    const fase2 = await waitIA('Fase 2', rand());
    console.log(fase2);

    const fase3 = await waitIA(5, rand());
    console.log(fase3);

    console.log('Terminamos na fase 3')
  } catch(e){
    console.log(e)
  }

 
}
executa();