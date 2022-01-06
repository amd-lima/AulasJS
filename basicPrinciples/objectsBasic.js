const pessoa1={
    nome: 'Sandra',
    sobrenome: 'Silva',
    idade: 25
};
console.log(pessoa1) // { nome: 'Sandra', sobrenome: 'Silva', idade: 25 }
console.log(pessoa1.nome) // 'Sandra'

//-----------------Using function-----------------------------
    function createPerson (nome, sobrenome, idade){
        return{ nome, sobrenome, idade };
    }
    const pessoa2 = createPerson('Angelina', 'Souza', 30);
    console.log(pessoa2.nome);

//-------------Objects e functions---------------------------
    const createPerson3 = {
        nome: 'Sandra',
        sobrenome: 'Silva',
        idade: 25,

        Fala() {
            console.log(`${this.nome} ${this.sobrenome} fala oi...`);
        }
    };
    createPerson3.Fala();

//Assim como em arrays se quiser copiar um objeto para outro sem que estejam ligados pelo mesmo endereço na memmoria:
// const createPerson4 = {...createPerson3}