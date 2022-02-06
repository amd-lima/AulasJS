// FILTER  -> filtra o array

// modo mais longo -> Retornar para outra variavel numeros maiores que 10
    const NUM = [5,8,10,9,54,3,4,15,47,2,13,1];
    function callbackfilter(valor , indice){
        return valor > 10? true:false;       
    }
    const NUM2 = NUM.filter(callbackfilter);
    console.log(NUM2); //[ 54, 15, 47, 13 ]

//MODO MAIS SIMPLIFICADO -> Retornar numeros maiores que 6
    const NUM3 = NUM.filter(valor => valor > 6);
    console.log(NUM3); //[ 8, 10,  9, 54, 15, 47, 13]

//Este método tambem pode retornar (valor, indice,array);

/* Exercicio
- Retornar as pessoas que:
    - tem nome com 5 letras ou mais
    - mais de 50 anos
    - tem o nome terminando com  a letra A
*/
    const PESSOAS = [
        {nome: 'Camila', idade: 62},
        {nome: 'Joana', idade: 27},
        {nome: 'Theo', idade: 95},
        {nome: 'Thiago', idade: 35},
        {nome: 'Julia', idade: 60},
        {nome: 'Bia', idade: 60},
    ];
    const PESSOAS_QUANT_LETRAS = PESSOAS.filter(valor => valor.nome.length >=5);
    console.log(PESSOAS_QUANT_LETRAS);

    const IDADE = PESSOAS.filter(valor => valor.idade >= 50);
    console.log(IDADE);

    const TERMINA_COM_A = PESSOAS.filter(valor => valor.nome.endsWith('a'));
    console.log(TERMINA_COM_A);