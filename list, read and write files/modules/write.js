const fs = require('fs').promises;
const path = require('path');
//                       TXT
const caminhoArq = path.resolve(__dirname, '..', 'test.txt');
const caminhoArq2 = path.resolve(__dirname, '..', 'test.json');

//APAGA E ESCREVE A NOVA FRASE
fs.writeFile(caminhoArq,'frase2\n',{flag:'w', encoding: 'utf8'} ) 

//ADD A NOVA FRASE
fs.writeFile(caminhoArq,'frase3\n',{flag:'a', encoding: 'utf8'} ) 

//                        JSON

const pessoas = [
    {nome:'Maria'},
    {nome:'João'},
    {nome:'Roberta'},
    {nome:'Janaina'},
    {nome:'Jorge'},
]

const json = JSON.stringify(pessoas)

fs.writeFile(caminhoArq2,json,{flag:'a'})
