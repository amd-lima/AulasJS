//Ambos ocupam o mesmo lugar na memoria, se modificar um tambem modifica o outro
  const produto = {nome: 'Caneca', preco: 1.8}
  const produto2 = produto;

//...faz com que copie o que tem dentro, mas em outro local, podendo adicionar outros elementos dentro.
  const produto3 = {nome: 'Caneta', preco: 1.1}
  const produto4 = {...produto3, materia: 'plastico'}; 

//Outra opção é utilizar o object.assign
  const produto5 = {nome: 'xicara', preco: 5.5}
  const produto6 = Object.assign({},produto5, {materia: 'porcelana'}); 

  produto6.nome = 'Xicara azul';
  produto6.preco = 10.00;
  console.log(produto6) //{ nome: 'Xicara azul', preco: 10, materia: 'porcelana' }
  console.log(produto5) //{ nome: 'xicara', preco: 5.5 }

//Se quiser pegar só algum objeto 
  const venda = {nome:produto6.nome, preco:produto6.preco};
  console.log(venda); //{ nome: 'Xicara azul', preco: 10 }

//congelar um objeto. Não deixar ser modificado
Object.freeze(produto);