// var pokemon =[];

// for(var index=0; index < pokemon.length;index++){
// //
// console.log(pokemon[index]);
// }

// var acumulador = 0;
// for(var index=0; index < pokemon.length;index++){
//     //
//     acumulador=acumulador + index;
    
//     }
//-----------------------------------------------------------------
//Contexto: Solicitar los nombres y apellidos por separado, unirlos e imprimirlos

//1.Variables

var texto, nombre;

//2.Solicitar datos y proceso

for(var i=1; i<=4;i++){
//
texto = prompt('Ingresa el texto');

if( i===1){
nombre =texto
//nombre = nombre + texto;
}else{
nombre +=` ${texto}`;
}
}

document.write(nombre)