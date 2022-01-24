//IIFE -> Immediately invoked function expression

//Cria uma função anonima que é invocada imediatamente, sem precisar declarar
//não toca o escopo global.
(function(){
    console.log(123);
})();

//-----------------------------------------------------------------------
//Factory Functions
function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        //Getter
        get nomeCompleto(){
            return `${this.nome}  ${this.sobrenome}.`;
        },
        //setter -> separar o nome, para pegar o primeiro nome 
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Santos');
console.log(p1.fala('falando oi!'));
const p2 = criaPessoa("Maria", 'Joana');
p2.nomeCompleto = 'Maria Joana Santos '
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.nomeCompleto);
