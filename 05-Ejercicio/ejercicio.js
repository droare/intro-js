// Ejercicio 1
// var bello = prompt('¿Eres bellisimo?');

// if(bello=='Si'){

// document.write('Ciertamente');

// }else{
//     document.write('No te creo');
// }

// Ejercicio 2

// var numero = prompt('Ingresa un numero')
// var esDivisibleDos = numero%2;

// if(esDivisibleDos==0){
//     document.write('El ', numero,  ' es divisible entre dos');

// }else{
//     document.write('El ', numero,  ' no es divisible entre dos');
// }

// Ejercicio 3

// var topping = prompt('¿Que topping quiere?') //Oreo, KitKat, Brownie, Solo
// topping = topping.toLowerCase().trim(); //trim elimina espacios antes y al //final de cada entrada
// //toLowerCase convierte a minusculas

// var precio=50;

// if(topping ==='oreo'){
//     precio += 10;
//     document.write('El costo del helado es: $', precio)
// }else if (topping ==='kitkat'){
//     precio += 15;
//     document.write('El costo del helado es: $', precio);
// }else if (topping ==='brownie'){
//     precio += 20;
//     document.write('El costo del helado es: $', precio);
// }else if (topping ==='coco'){
//     precio += 18;
//     document.write('El costo del helado es: $', precio);
// }else{
//     document.write('El costo del helado es: $', precio);
// }

// switch(topping){
//     case 'oreo':
//     precio += 10;
//     break;
//     case 'kitkat':
//     precio += 15;
//     break;
//     case 'brownie':
//     precio += 20;
//     break;
//     case 'coco':
//     precio += 18;
//     break;

//     default:
//     precio += 0
   
// }

// document.write('El costo del helado es: $', precio);

//Evaluar el clima (soleado, lluvioso, nublado, chubascos)

var clima = prompt('¿Como esta el clima?')
clima = clima.toLowerCase().trim();

switch(clima){
    case 'soleado':
    document.write('El clima esta soleado usa bloqueador');
    break;
    case 'lluvioso':
    document.write('El clima esta lluvioso usa paraguas');
    break;
    case 'nublado':
    document.write('El clima esta nublado usa impermeable');
    break;
    case 'chubascos':
    document.write('El clima esta con chubascos');
    break;

    default:
    document.write('El clima esta nevado');
   
}