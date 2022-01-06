//String
console.log('Hello world');   //Hello world  
console.log("Hello 'world'"); // Hello 'world'
console.log(`hello world`);   // hello world

//numeros
console.log(125632);    // 125632
console.log(1252.3556); // 1252.3556
console.log(125655,552); // 125655 552

console.log('Meu nome é "Amanda". Estou aprendendo JS às', 21, 'da noite!')

//comentário linha

/*
 Comentário de bloco
*/

//--------------------ATALHOS------------------------
/*
    COPIAR LINHA = alt + shift + seta
    MOVER LINHA = alt + seta
    saber o tipo da variavel = console.log(typeof(nome Da Variavel)) 
    

*/

//------------------PERCORRER UMA STRING / CONCATENAR ---------------

let umaString = "Um texto";
// percorrer
console.log(umaString[3]); // t = pega a posiçao que está a letra.
console.log(umaString.charAt(4)); // e = pega a posiçao que está a letra.
console.log(umaString.indexOf('t')); // 3 = pega a posiçao que está o inicio do texto.
console.log(umaString.lastIndexOf('t')); // 3 = pega a posiçao que está o inicio do texto.


console.log(umaString.match(/[a-z]/g));//[ 'm', 't', 'e', 'x', 't', 'o' ] --> Expressoes regulares
console.log(umaString.search(/x/)); // 5 --> posição da letra no array.
console.log(umaString.replace('Um', 'Outro')) // Outro texto --> troca o que estiver escriito por outro.

let texto = 'O rato roeu a roupa do rei de roma';
// replace --> troca 
console.log(texto.replace(/r/,'l'));  // O lato roeu a roupa do rei de roma --> troca a primeira apenas.
console.log(texto.replace(/r/g,'l')); // O lato loeu a loupa do lei de loma --> troca todas.

// length --> tamanho
console.log(texto.length);            //34   --> o tamanho da string

// slice --> pega o pedaço que vc declara
console.log(texto.slice(2, 6));       //rato --> pega a palavra começada na posição 2 até a 6. só que é uma antes da 6
console.log(texto.slice(-4));         //roma  --> pega o total e subtrai - 4
console.log(texto.slice(-4, -1));     //rom  --> pega o total e subtrai -1 e pega do -4 

//  slice substitui o substring
console.log(texto.substring(texto.length -4, texto.length -1)); //rom  --> pega o total e subtrai -1 e pega do -3  

// dividir uma string
console.log(texto.split(' ')); //[ 'O','rato', 'roeu','a','roupa', 'do','rei','de','roma']
console.log(texto.split('r')); //[ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma' ]
console.log(texto.split('r', 3)); //[ 'O ', 'ato ', 'oeu a ' ]

// Tudo maiusculo
console.log(texto.toUpperCase()); //O RATO ROEU A ROUPA DO REI DE ROMA
console.log(texto.toLowerCase()); //o rato roeu a roupa do rei de roma

 // concatenar
console.log(umaString.concat(' lido.')) 
             //OU
console.log(umaString + ' escrito.')
            //OU
console.log(`${umaString} escrito e lido.`)


