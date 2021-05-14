
const nome = prompt('Buongiorno, meu nobre! Gostaria de saber seu nome')
const anodenascimento = prompt('Agora o seu ano de nascimento...')
const anoatual = 2021

console.log(typeof(anodenascimento))
console.log(typeof(anoatual))

let x = anodenascimento
let y = anoatual

alert(`O seu nome é ${nome} e, em 2021, vai fazer, ou já fez, ${y-x} anos!`)
