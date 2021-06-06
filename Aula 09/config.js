function parampam (a,b) {
    return a * b;
}


function potencia(base,expoente){

    if(expoente>0){

        while (i<expoente){
        pow *= base;
        i++;
        }
    }else if(expoente<0){

        pow *= 1/base;
        i++;
    }else{

        pow++;
    }

    return pow;
}

function SomaDosImpares(a,b){
    
}
/*-------------------------------------------------------------------------------------------------------------*/
let a = parseInt(prompt('Digite um número inteiro'));
let b = parseInt(prompt('Digite outro número inteiro'));

let x = parampam(a,b);
alert(`O resultado da multiplicação dos números é igual a ${x}`);

let base = parseInt(prompt('Digite a base'));
let expoente = parseInt(prompt('Digite o expoente'));
let i = 1;
let pow = 0;

alert(`O resultado é igual a ${potencia(base,expoente)}`);

/*----------------------------------------------------------------------------*/

