const w129 = document.querySelector("#a1");
w129.id = 'a1b';
w129.insertAdjacentHTML('afterbegin', "<h1>Enxurrada de Bits</h1>");
    

const x = document.querySelector("#a2");

let x129 = document.createElement('div');
let section = document.createElement('section');

    let x189 = document.createElement('h2');
    let x189b = document.createTextNode('Enxurrada de bits')

    let x192 = document.createElement('p');
    let x192b = document.createTextNode('Aula 10');

    x189.appendChild(x189b);
    x129.appendChild(x189);

    x192.appendChild(x192b);
    x129.appendChild(x192);

    let x001 = document.createElement('h2');
    let x001b = document.createTextNode('Programação-web')

    let x002 = document.createElement('p');
    let x002b = document.createTextNode('Arthur Rafael');

    x001.appendChild(x001b);
    x129.appendChild(x001);

    x002.appendChild(x002b);
    x129.appendChild(x002);



document.getElementById('a2').insertAdjacentElement('afterbegin',x129);
