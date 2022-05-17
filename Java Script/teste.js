/* let a = parseInt(prompt('Digite o primeiro lado: '))
let b = parseInt(prompt('Digite o segundo lado: '))
let c = parseInt(prompt('Digite terceiro o lado: '))

if(a < b + c && b < c + a && c < a + b) { //verifica o tamanho dos lados
    
    if(a==b && b==c){
        alert("Equilátero")
    } else if ( a!=b && a!=c && b!=c) {
        alert("escaleno")
    } else {
        alert ("isoceles")
    }     
} else {
    alert("não formam um triangulo!")
} */ 

var hora = 25
console.log(` São exatamente ${hora} horas.`)

if (hora < 12) {
    console.log("Bom Dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
}    else {
        console.log("Boa noite!")
}