//Hacer un programa que solicite la cantidad de ingredientes para preparar un platillo 
//Y los ingredientes para su preparacion, por ultimo imprimir en pantalla la lista de ingredientes

//Variables
var nombrePlatillo = prompt("Por favor introduzca el nombre del platillo")
var numIngredientes =  Number(prompt("Por favor introduzca la cantidad de ingredientes")) // Verififcar que es un numero
var arrayIngredientes = [];

// capturar los datos necesarios

//procesamiento

for(var i=1;i<=numIngredientes;i++){

    arrayIngredientes.push(prompt(`Ingresa el nombre del ingrediente ${i}`));

}

document.write(`<b>Ingredientes para hacer ${nombrePlatillo}</b><br>`);

for(var j=0;j<arrayIngredientes.length;j++){

    document.write(`El ingrediente ${j+1} es ${arrayIngredientes[j]}<br>`);

}



// Ejercicio 2.
// 19:19
// Solicitar al usuario que ingrese tres números
// y mostrar cuál de los tres es el número mayor.
// Considerar el caso en que 2 números sean iguales.