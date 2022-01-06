// Arrays may conten various types of data mixed in, but for good practice this is not adivised.

const alunos = ['Luiz', 'Maria', 'João', 1 , null, true];
console.log(alunos[2]); // João

// change
alunos [2] = 'Aline';
console.log(alunos[2]); //Aline
//----------------------------------Add at the end--------------------------------------------
alunos[6] = 'Camila';
console.log(alunos) // Camila will be added at the end
// another way

alunos[alunos.length] = 'Maeve'
console.log(alunos) // ['Luiz','Maria','Aline', 1, null, true,'Camila','Maeve']
// simple way
alunos.push('Gisele');
console.log(alunos) // ['Luiz','Maria','Aline', 1, null, true,'Camila','Maeve', 'Gisele']

//----------------------------Add at the beginning------------------------------------------------
alunos.unshift('Thiago');
console.log(alunos) // ['Thiago', 'Luiz','Maria','Aline', 1, null, true,'Camila','Maeve', 'Gisele']

//----------------------------Remove at the end------------------------------------------------
alunos.pop();
console.log(alunos); // ['Thiago', 'Luiz','Maria','Aline', 1, null, true,'Camila','Maeve']

//----------------------------Remove at the beginning------------------------------------------------
alunos.shift();
console.log(alunos);// ['Luiz','Maria','Aline', 1, null, true,'Camila','Maeve']

//Remove, but don't change de index
delete alunos[4];
console.log(alunos); // ['Luiz','Maria','Aline', 1,     <1 empty item>      , true,'Camila','Maeve']

// just like with strings, you can use:
// slice(0, 5 ) --> it's position, can be (0, -2) --> the negative take what is between the positions

// To find out if it's an array
console.log(alunos instanceof Array); //true

/*
 nas variaveis imutaveis quando se faz:
  let a = A ;
  let b = a ;
  b recebe uma cópia de a. Se o a for modificado o b continua o mesmo.

  Em arrays, object, functions eles são passados por referencia. entao se tiver:

  let a = [1, 2, 3]
  let b = a
  Se modificar algum tanto o a quanto o b os dois serão modificados, pois ocupam o mesmo local na memória
  
  Para fazer uma cópia:
  let a = [1, 2, 3]
  let b = [...a]
  Assim se modificar 1 o outro não será modificado.

 */