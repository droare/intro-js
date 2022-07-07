//AND (&&)

// And 
// true  && true  = true
// true  && false = false
// false && true  = false
// false && false = false

//OR (||)

// And 
// true  && true  = true
// true  && false = false
// false && true  = false
// false && false = false

//if (condicion){ instrucciones logicas}

// if (NaN)
// {
// console.log('truthy')

// }else{console.log('falsy')};

//var edad = prompt('Porfavor introduce tu edad');
//Validad los datos introducidos (Strings, etc)

// if (edad>=18)
// {
// document.write('Eres mayor de edad')
// }else{document.write('Aun estas chiquito')};

//If else

// if(condicion){

// }else if (){

// }else if(){

// }else {}

// var mesActual = 7;

// if(mesActual==12){
//     document.write('Es diiembre');
// }else if(mesActual==7){
//     document.write('Es julio');
// }else{
//     document.write('Es otro mes');
// }

// var mesActual = 7;
// var esDiciembre = mesActual==12;
// var esJulio = mesActual==7;

// if(mesActual==12){
//     document.write('Es diiembre');
// }else if(mesActual==7){
//     document.write('Es julio');
// }else{
//     document.write('Es otro mes');
// }


//EJERCICIO

// var edad = prompt('¿Cuál es tu edad?');
// var residencia = prompt('¿Resides en un pais froterizo?');
// var estaEmbarazada = prompt('¿Estas actualmente embarazada con mas de 9 semanas?')
// var mayor30Esteaño = prompt('¿Cumple 30 años o mas este año?')

// var vivesFroterizo = residencia=='Si' || residencia =='si' || residencia == 'SI' || residencia == 'sI';
// var embarazo = estaEmbarazada=='Si' || estaEmbarazada =='si' || estaEmbarazada == 'SI' || residencia == 'sI';
// var treintaOMas = mayor30Esteaño=='Si' || mayor30Esteaño =='si' || mayor30Esteaño == 'SI' || residencia == 'sI';

// if(edad>=18 && vivesFroterizo == true) {

// console.log('puedes vacunarte');
// }else if(number(edad) >=18 && embarazo==true) {

//     console.log('puedes vacunarte');
// }else if(edad>=29 && treintaOMas==true){

//     console.log('puedes vacunarte');
// }else {

//     console.log('no puedes vacunarte');
// }