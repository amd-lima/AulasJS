//Tratando possiveis erros
/*
try{
    EXECUTADA QUANDO NÃO HÁ ERRO
}catch(err){
    EXECUTADA QUANDO HÁ ERRO
}finally{
    SEMPRE
}
*/
try{
    console.log(naoExisto);
}catch(err){
    console.log('A variavel não existe.');
   // console.log(err); // não aconselhavel
}

function soma (x, y){  
    if(typeof x !== 'number' || typeof y !== 'number'){
       // throw('x e y precisam ser números.') / pode ser assim, ou capturar o erro
       throw new ReferenceError('x e y precisam ser números.'); //Can be Error; typeError
    }
    return x + y;
}
try{
    console.log(soma(1, "1"));
}catch(erro){
   // console.log(erro); mostra o erro, mas não mostrar isso ao usuario.
   console.log('colocar algo mais amigavel ao usuario.')
}
 //-----------Exemplo usando hora

 function retornaHora(data){
     if (data && !(data instanceof Date)){
         throw new TypeError('Esperando instancia de date.');
     }
     if (!data){
         data = new Date();
     }

     return data.toLocaleTimeString('pt-BR',{
         hour12: false
     });
 }

 try{
 const hora = retornaHora();
 console.log(hora);
}catch(e){
    console.log('deu erro');
}finally{
    console.log('Have a nice day!!')
}