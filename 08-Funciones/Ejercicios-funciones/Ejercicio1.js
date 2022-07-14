// 1.Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
// "Positivo" si el número es positivo.
// "Negativo" si el número es negativo.
// "Cero" si el número es cero.

//Variables

let num = Number(prompt(`Por favor introduzca un numero`))
function Evaluate(num){

if(num<0){
    return document.write(`El numero ${num} es negativo`);
}else if(num>0){
    return document.write(`El numero ${num} es positivo`);
}else{
    return document.write(`El numero ingresado es cero`);
}
}
Evaluate(num);