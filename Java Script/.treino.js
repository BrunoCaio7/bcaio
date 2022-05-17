
    
/* const greetingMessage = () => {

    
let h = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', hour12: false}); // formato 24 horas (0-23)
if (h >= 0 && h <= 5) { // entre meia noite (0h) e 5 da madrugada
  return 'Boa madrugada';
} else if (h >= 6 && h < 12) { // entre 6 e 11 da manhã
  return 'Bom dia';
} else if (h >= 12 && h < 18) { // entre meio dia (12h) e 17 (5h) da tarde
  return 'Boa tarde';
} else if (h >= 18 && h <= 23) { // entre 18 (6h) e 23 (11h) da noite
  return 'Boa noite';
}
}

console.log(greetingMessage());
 */

var hora = 7
console.log(` São exatamente ${hora} horas.`)

if (hora < 5) {
    console.log("Boa Madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
}    else if (hora < 18){
        console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
