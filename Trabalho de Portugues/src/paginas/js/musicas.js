function creatorx () {

    let wall = document.getElementById('wall');

    let createsec = document.createElement('section');
    createsec.classList.add("quadro2");

    let createh2 = document.createElement('h2');
    createh2.classList.add("musica2");
    let h2 = document.getElementById('addmusica');
    let contenth2 = document.createTextNode(`${h2.value}`);

    let casa = document.createElement('div');

    /*----------------*/


    let createp = document.createElement('p');
    createp.classList.add("autor2");
    let p = document.getElementById('addautor');
    let contentp = document.createTextNode(`${p.value}`);

    //----------------------------------------------/

    
    wall.appendChild(casa);
    casa.appendChild(createsec);
    createsec.appendChild(createh2);    
    createh2.appendChild(contenth2);
    createsec.appendChild(createp);
    createp.appendChild(contentp);

//wall.appendChild(createsec);
//createsec.appendChild(createp);
//createp.appendChild(contentp); 
}

let buttoncreator = document.querySelector("#creator");
buttoncreator.addEventListener("click", creatorx);
