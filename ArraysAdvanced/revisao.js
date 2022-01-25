/*Funções de deletar:
remove - deleta o valor sem remover o indice
pop    - deleta o indice e o valor do final
shift - deleta o indice e o valor do começo.
*/

/*Funções de adicionar:
push - adiciona ao final
unshift - add ao inicio locomovendo todos os outros elentos. ** não é muito aconselhavel, pois pode causar um problema de performace
*/
/*Fatiar o array
Slice

*/



const nomes = ['Ana', 'Carla', 'José','Camila','Joana'];
nomes[1] = 'João';
console.log(nomes); 
//[ 'Ana', 'João', 'José', 'Camila', 'Joana' ]


//Deletar sem remover o indice
delete nomes[0];
console.log(nomes);
 //[ <1 empty item>, 'João', 'José', 'Camila', 'Joana' ]

 //Arrays são dados por referencia
 //Exemplo
 const novo = nomes; //novo recebe todos os dados de nome, mas se eu modificar o novo, também será modificado o nomes.
 novo.pop(); //deleta o ultimo indice
 console.log(nomes); 
 //[ <1 empty item>, 'João', 'José', 'Camila' ]

 //Para que não ocorra isso, usa-se o spread operator
 //Exemplo:
 const novo2 = [...nomes];
 novo2.pop();
 console.log(novo2);//[ undefined, 'João', 'José' ]
 console.log(nomes);//[ <1 empty item>, 'João', 'José', 'Camila' ]

 //O pop remove e retorna o valor que foi removido do final.
 const removidos = nomes.pop();
 console.log(removidos); //Camila

//O shift remove e retorna o valor que foi removido do começo.
const removidos2 = nomes.shift();
 console.log(removidos2); //undefined - pq o indice 0 não tinha valor.

//Adicionar
nomes.push('Gisele'); //add ao final
console.log(nomes); //[ 'João', 'José', 'Gisele' ]
nomes.unshift('Bia'); //add ao inicio
console.log(nomes); //[ 'Bia', 'João', 'José', 'Gisele' ]