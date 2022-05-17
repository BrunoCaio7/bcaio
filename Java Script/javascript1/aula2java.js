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