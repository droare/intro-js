// NombreObjeto = {

// Valor
// Valor 

// }

let mascota = {
nombre:`Scott`,
color:`Cafe`,
edad:5,
macho:true
};

console.log(mascota.nombre);
console.log(mascota.color);
console.log(mascota[`nombre`])
console.log(mascota[`color`])


//Desestructuracion
const superheroe = {
nombre:`Capitan America`,
edad:`30`,
peso:`100`,
empresa:`Marvel`
};
const {nombre,edad,peso,empresa} = superheroe;
console.log(`${nombre} tiene ${edad} años, pesa ${peso} kg y es de ${empresa}}`)