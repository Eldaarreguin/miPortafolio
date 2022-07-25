"use strict"

console.log("Hola mundo, desde mi portfolio")

function mult(a,b) {
    let resultado = 0;
    for (let index =1; index <= b; index++) {
        resultado = resultado + a;
    }
    return resultado
}
console.log(mult(6,2));


/* multiplicar dos numeros sin usar el simbolo de multiplicar
respuetas: multiply (2,6)
output: igual a 12 */