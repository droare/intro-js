//Diseñar un algoritmo que permita aplicar un descuento en el supermercado de tal forma que permita visualizar el monto a pagar despues de aplicar dicho procedimiento


let totalCuenta = Number(prompt(`Introduzca la cuenta total`))

function descuento (totalCuenta){
const descuento = totalCuenta*.10;

let totalConDescuento = totalCuenta-descuento

return document.write(`Felicidades tiene un descuento del 10% (${descuento}) su nuevo total es de:  ${totalConDescuento} $`);

}

descuento(totalCuenta);