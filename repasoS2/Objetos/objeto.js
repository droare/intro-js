//Declaara un objeto literal vacio

const objetoVacio = {};
const gato = {
    sonido:`Miaow`,
    color:`Blanco`,
    esterilizacion:true
    };
//Accede a una propiedad de tu objeto anterior
console.log(gato.sonido);

gato.sonido=`Guau`;
// const {sonido,color,esterilizacion} = gato;
console.log(gato.sonido);

//Reasigna una propiedad del objeto anterior

//Agrega dos propiedades a tu objeto anterior
gato.edad = 2;
gato.vacunas = [`triple`,`rabia`];

console.log(gato);

//Hacer un objeto de 2 usuarios con su nombre como propiedad y dentro un objeto con email, id, edad, habilidades, puntaje

const usuarios = {
    Daniel:{
        id:1,
        email:`daniel@correo`,
        edad:25,
        habilidadades:[`HTML`, `CSS`, `JS`],
        puntaje: 50
    },
    Valeria:{
        id:2,
        email:`vale@correo`,
        edad:21,
        habilidadades:[`HTML`, `CSS`],
        puntaje: 20
    }
    };

// console.log(usuarios.Valeria)    
// console.log(usuarios.Daniel)
//Es bueno usar optional chaining (?) para evitar error 
// const numeroDehabilidades = usuarios?.Daniel?.idiomas?.length;
// const numeroDehabilidades = usuarios.Daniel.idiomas.length;
// console.log(`habilidades de daniel ${numeroDehabilidades}`);
//Encuentra el usuario con el Stack NERN

const NERN = [`HTML`, `CSS`, `JS`];

const buscar = function(elemento){
// elemento.habilidadades
const {habilidadades} = elemento;

}



console.log(usuarios.values);

//Metodos para obtener las metodos en un array
const valuesKeys = Object.keys(usuarios)
console.log("🚀 ~ file: objeto.js ~ line 57 ~ Object.keys(usuarios)", Object.keys(usuarios))
//Metodo para obtener los valores en un array
const valuesValues = Object.values(usuarios)

console.log("🚀 ~ file: objeto.js ~ line 60 ~ Object.values(usuarios)", Object.values(usuarios))
// //Metodo para obtewner metodos y valores
// Object.entries(usuarios)
// console.log("🚀 ~ file: objeto.js ~ line 62 ~ Object.entries(usuarios)", Object.entries(usuarios))

//Investigar callback h

//-----------------------------------------------------------------------------------------------------------------



