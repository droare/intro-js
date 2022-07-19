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

console.log(usuarios.values);

//Metodos para obtener las metodos en un array
Object.keys(usuarios)
console.log("🚀 ~ file: objeto.js ~ line 57 ~ Object.keys(usuarios)", Object.keys(usuarios))
//Metodo para obtener los valores en un array
Object.values(usuarios)
console.log("🚀 ~ file: objeto.js ~ line 60 ~ Object.values(usuarios)", Object.values(usuarios))
//Metodo para obtewner metodos y valores
Object.entries(usuarios)
console.log("🚀 ~ file: objeto.js ~ line 62 ~ Object.entries(usuarios)", Object.entries(usuarios))