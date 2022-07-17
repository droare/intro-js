1//Diseñar un algoritmo que permita ingresa el nombre, edad y ciudad de una persona, los resultados deben mostrarse en pantalla.

let nombre = prompt(`Por favor ingrese su nombre`);
let edad = Number(prompt(`Por favor introduce tu edad`));
let ciudad = prompt(`Por favor ingrese su ciudad`);

document.write(`Su nombre es ${nombre} tiene ${edad} y vive en la ciudad de ${ciudad}`);