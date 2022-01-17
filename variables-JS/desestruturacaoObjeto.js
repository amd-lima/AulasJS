// Objeto
const pessoa = {
    nome: 'Maite',
    sobrenome: 'Maria',
    idade: 30,
    endereco: {
        rua: 'av Brasil',
        numero: 123
    }
};

console.log(pessoa);/*
{
  nome: 'Maite',
  sobrenome: 'Maria',
  idade: 30,
  endereco: { rua: 'av Brasil', numero: 123 }
}
*/
console.log(pessoa.nome); //Maite

//Atribuir em outra variavel:
const sobrenome1 = pessoa.sobrenome;
console.log(sobrenome1); //Maria

//Atribuiição via desestruturação
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade); //Maite Maria 30

//mudar o nome da variavel que irá receber
const {nome: dado1, sobrenome: dado2, idade: dado3 } = pessoa;
console.log(dado1, dado2,dado3) // Maite Maria 30
