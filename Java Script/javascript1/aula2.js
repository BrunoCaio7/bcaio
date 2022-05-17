
let number = NaN

while (isNaN(number) || number == 0 ){
    number = parseFloat(prompt('digite o número da tabuada'))
}

for (let i = 1; i<= 1000; i++) {
document.write(`<p>${number} x ${i} = ${number * i} </p>`)

}


 