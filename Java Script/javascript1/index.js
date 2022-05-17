/* var nome = prompt('Qual seu nome?')

        alert (nome)

        let idade = prompt('Quantos anos voçê tem?')
        alert('Voçê tem ' + idade + ' anos')

        const pi = 3.14 */

        // ALT + SHIFT + A = comentar em Java Script

        


/* l *//* et string = 'Olá mundo'
let string2 = "Olá mundo"
let string3 = `Olá mundo`

var n = 5
let n2 = 5.63


const bool = true
const bool2 = false

let soma = n + n2 + 7
console.log(soma)

let sub = n2 - n
console.log(sub)

let multi = 45 * 5
console.log(multi)

const div = 9 / 3
console.log(div)

const media = (7+5+9.5+4+8) / 5 * 8
console.log(media)

console.log(75 % 6) */

/* let a = 7
let b = 7

console.log(a == b)
console.log(a === b)
console.log(a ! = b)
console.log(a ! == b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b) */

/* let nota1 = parseFloat(prompt('informe a 1° nota'))
let nota2 = parseFloat(prompt('informe a 2° nota'))
let nota3 = parseFloat(prompt('informe a 3° nota'))

const media = (nota1 + nota2 + nota3) / 3

alert('Sua média é:' + media)

if (media > 7){
        alert('PARABÉNS!  PASSOU ACIMA DA MÉDIA')
}
if (media === 7){
        alert('QUASE NÃO PASSOU,HEIN')
}
if(media < 7){
        alert('SINTO MUITO,VOCÊ NÃO PASSOU.')
} */

/*
let nota1 = parseFloat(prompt('Informe a 1° nota'))
let nota2 = parseFloat(prompt('Informe a 2° nota'))
let nota3 = parseFloat(prompt('Informe a 3° nota'))
let qtdFaltas = parseInt(prompt('Informe sua quantidade de faltas'))

const media = (nota1 + nota2 + nota3) / 3


console.log('Sua média é: ' + media)

if (media > 7 && qtdFaltas <= 3) {
  console.log('PARABÉNS! Passou acima da média.')
} else if (media === 7) {
  console.log('QUASE NÃO PASSOU, HEIN')
} else {
  console.log('Sinto muito, você não passou.')
}
 */

const qtdNotas = parseInt(prompt('Quantas notas devem ser recebidas?'))

let i = 0 // variavél 
let soma = 0

while (i < qtdNotas)/* condição booleana */{
    const nota = parseFloat(prompt('informe a nota'))
    soma = soma + nota
i++
}
const media = soma / qtdNotas
alert('Sua média é ' + media)



