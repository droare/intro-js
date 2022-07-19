const arrayOriginal = [];

//Hay metodos que modifican el array original push, pop, unshift, shift, splice
//La mutabilidad se refiere al cambio que los datos sufren

Object.freeze(arrayOriginal) // Con esto ya no va a ser mutable el array

//Copia rapida de un arreglo
const copiaDelArrayOriginal = [...arrayOriginal];

const miObjeto = {};

//... SPREAD OPERATOR || REST OPERATOR
const copiaObjeto = {...miObjeto};

Object.freeze(miObjeto);
//Copia rapida de un objeto


//Profundizar aprendizaje
//Inmutabilidad
//Hoisting
//Azucar Sintactica JS
//Coertion

