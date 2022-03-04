const pessoas = [
  {id: 3, nome: 'Bia'},
  {id: 2, nome: 'wil'},
  {id: 1, nome: 'theo'},
];

// NO EXEMPLO ABAIXO: COLOCANDO O ID COMO IDENTIFICADOR DE PESSOAS, ELE MUDA A ORDEM PRA CRESCENTE.
  /* const ordenandoPessoas = {};
  for (const pessoa of pessoas){
    const {id} = pessoa;
    ordenandoPessoas[id] = {...pessoa};
  }
  console.log(ordenandoPessoas)
  {
    '1': { id: 1, nome: 'theo' },
    '2': { id: 2, nome: 'wil' },
    '3': { id: 3, nome: 'Bia' }
  } */

// UTILIZANNDO O MAP PARA NÃO ALTERAR A ORDEM EM QUE SÃO SALVO OS DADOS.
  const ordenandoPessoas = new Map();
    for (const pessoa of pessoas){
      const {id} = pessoa;
      ordenandoPessoas.set(id, {...pessoa});
    }
  console.log(ordenandoPessoas)
  /* 
  Map(3) {
    3 => { id: 3, nome: 'Bia' },
    2 => { id: 2, nome: 'wil' },
    1 => { id: 1, nome: 'theo' }
  } 
  */
// ACESSAR VALORES
  for (const keys of ordenandoPessoas.keys()){
    console.log(keys); // 3 2 1 
  }
  for (const valores of ordenandoPessoas.values()){
    console.log(valores); // 3 2 1 
  }
  /*
  { id: 3, nome: 'Bia' }
  { id: 2, nome: 'wil' }
  { id: 1, nome: 'theo' }
  */

// ELIMINAR VALORES
ordenandoPessoas.delete(2);
console.log(ordenandoPessoas); //{ 3 => { id: 3, nome: 'Bia' }, 1 => { id: 1, nome: 'theo' } }