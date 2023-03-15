const path = require('path');
const read = require('./modules/read');
const caminhoArq2 = path.resolve(__dirname, 'test.json');

async function readArq(caminho){
    const dados = await read(caminho);
    renderizaDados(dados);
    return dados;
}

const dadosArq = readArq(caminhoArq2).then( dados => console.log(dados));

function renderizaDados(dados){
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val.nome));
}
