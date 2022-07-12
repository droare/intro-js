//do{codigo a ejecutar}while(condicion);

// var contador = 0;

// do{
// contador++;
// console.log('Conteo: ',contador);

// }while(contador<10)

//ejercicio 01

//Contexto : Jugar la loteria con numeros entre 1 y 100, mostrar el ganador una vez caiga el numero 77

//1. Variables
var numero,contador=0;

//2. Obtener Datos

var numeroGanador = Number(prompt('Ingrese el numero ganador'));

//if normal --------- if(condicion){true}else{codigo si false}
//condicion ternario ------- condicion ? codigo si true : codigo si false

if(isNaN(numeroGanador)){

alert('Ingresa un numero valido please :(')
}else{

//3. Determinar el ganador

do{

numero = Math.round(Math.random()*100)
contador ++;
console.log(numero)
if(numero == numeroGanador){
alert('Ganaste');
}

}while(contador<50)

}
