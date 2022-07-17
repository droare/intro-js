//Variables globales

let nombre = `Daniel`
let anioNacimiento=`1996`, anioActual=`2022`;

//Variables de ambito local

function CalculaEdad(anioNacimiento,anioActual){
let edad = anioActual-anioNacimiento
return edad;
}

alert(`Hola ${nombre}, tu edad es ${CalculaEdad(anioNacimiento,anioActual)}`);