//Diseñar un algoritmo que permita calcular las operaciones aritmeticas basicas ingresando 2 valores numericos por el teclado

let num1 = Number(prompt(`Ingrese el primer numero`))
let num2 = Number(prompt(`Ingrese el segundo numero`))
let suma = num1+num2, resta = num1-num2, multiplicacion = num1*num2, division = num1/num2;

document.write(`La suma ${num1} + ${num2} es: ${suma}<br>`)
document.write(`La resta ${num1} - ${num2} es: ${resta}<br>`)
document.write(`La multiplicacion ${num1} * ${num2} es: ${multiplicacion}<br>`)

if(num2===0){
    document.write(`La division entre 0 no esta definida`)
}else if(num1===0&&num2===0){
    document.write(`La divisionde 0 entre 0 no esta definida`)
}else{
    document.write(`La division ${num1} / ${num2} es: ${division}`)
}
