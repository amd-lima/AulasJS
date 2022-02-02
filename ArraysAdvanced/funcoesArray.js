// SPLICE --> deleta item do array (indice, qtd de elementos a partir do indice) e retorn o removido
const nomes = ['Ana','Maria','João','Edu','Julia']
const removidos = nomes.splice(1,2);
const removidos2 = nomes.splice(-2, 2); //indice -2 e quantidade 2 a partir daquele indice
console.log(nomes, removidos, removidos2) //[ 'Ana', 'Edu', 'Julia' ] [ 'Maria', 'João' ]
// caso queira pegar de um indice até um o final (2, Number.MAX_VALUE);

// Pode ser usado tambem para adicionar item a partir do indice:
const frutas = ['banana', 'uva', 'pera', 'manga'];
const AddFrutas = frutas.splice(2, 0, 'acerola');
console.log(frutas, AddFrutas) 
//[ 'banana', 'uva', 'acerola', 'pera', 'manga' ] []
const trocaFrutas = frutas.splice(3, 1, 'kiwi')
console.log(frutas,trocaFrutas) 
//[ 'banana', 'uva', 'acerola', 'kiwi', 'manga' ] [ 'pera' ]

//------------CONCATENAR----------------------------
  //--- Utilizando concat ---
    const juncao = nomes.concat(frutas);
    console.log(juncao)
    //[ 'Ana', 'banana', 'uva', 'acerola', 'kiwi', 'manga' ]
    const juncao2 = nomes.concat('outros', [1,2])
    console.log(juncao2)
    //[ 'Ana', 'outros', 1, 2 ]

    //--- Utilizando Spread ----
    const juncao3 = [...nomes,'Luiz' ,...juncao2]
    console.log(juncao3);
   //[ 'Ana', 'Luiz', 'Ana', 'outros', 1, 2 ]