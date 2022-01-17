const paragrafos = document.querySelector('.paragrafo');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backGB = estiloBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backGB;
    p.style.color = 'RGB(188, 135, 238)';
    p.style.padding = '10px'
    p.style.borderRadius = '10px'
}