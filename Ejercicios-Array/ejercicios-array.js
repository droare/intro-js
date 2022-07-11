
// Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

// var arrayVacio = [];

// for (var i = 0; i < 10; i++) {
// var rango = 10;   
// var numRandom = Math.ceil(Math.random()*rango);
// arrayVacio[i]=numRandom;
//  }

// document.write(arrayVacio);
// console.log(arrayVacio)


// El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.


// var  palabrasUsuarios = prompt("Ingresa unas palabras separadas por coma");
// var arrayPalabrasUsuario =palabrasUsuarios.split(",")
// document.write(arrayPalabrasUsuario);
// console.log(arrayPalabrasUsuario);

// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.


function ordenarNumeros(a,b){return a-b};

var array=[10,40,30,20,15,5];
var minix =Math.min(...array);
var maxix =Math.max(...array);

document.write("El array ordenado es: "+array.sort(ordenarNumeros));
console.log("El array ordenado es: "+array.sort(ordenarNumeros));

document.write("El menor numero es : "+minix);
console.log("El menor numero es : "+minix);

document.write("El mayor numero es : "+maxix);
console.log("El mayor numero es : "+maxix);
