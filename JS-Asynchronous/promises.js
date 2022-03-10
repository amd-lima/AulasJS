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
waitIA("frase 1", rand(1, 3)).then(resposta => 
  {console.log(resposta);
     return waitIA(123456, rand(1, 3)); }
  ).then(resposta =>{
    console.log(resposta);
    return waitIA("frase 3", rand(1, 3));
  }).then(resposta => {
    console.log(resposta);
  }).catch(e => {
    console.log('ERRO:', e)
  });


