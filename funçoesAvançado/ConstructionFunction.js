//A função construtora constroi os objetos. 
//começa com letra maiuscula => Pessoa (new)
// new -> cria um objeto vazio, aponta o this para o objeto que está sendo utilizado e retorna o objeto para a variavel. Não precisa do return.
// Diferente das factorys usa-se ; dentro.
//Pode se criar métodos, variaveis ou funções privadas

function Pessoa(nome, sobrenome){

    //atributos ou métodos publicos, estão disponiveis.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método.')
    };
    //Privadas, não estão disponiveis fora do corpo
    const ID = 12345;
    const metodoInterno = function () {
    };
}
const p1 = new Pessoa('Josh','Mac');
console.log(p1.nome);
p1.metodo(); //Josh: sou um método.