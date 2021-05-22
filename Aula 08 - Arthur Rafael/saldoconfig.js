let nome = prompt('Digite seu nome');
alert(`Olá, ${nome}! O seu saldo atual no banco Jureg é de R$900!`)

let compra = parseInt( prompt ('Qual o valor da compra que você gostaria de fazer?') );

if(compra<=900){
    alert(`Sua compra foi realizada com sucesso! O seu saldo atualizado é de ${900-compra}`)
}else if(compra>900){
    alert('Seu saldo atual é insuficiente para realizar a compra!')
}

alert('Após finalizar as compras, gostaria de experimentar a nossa calculadora?');

let a = parseInt( prompt ('Insira um número'));
let b = parseInt( prompt ('Insira outro número'));
let c = parseInt(prompt ('Insira o sinal( *, -, + ou /) da conta...'));

let d = `${a}${c}${b}`;

alert(`O resultado da sua conta é ${d}`);