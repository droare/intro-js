// 2. Escriba una función para ingresar
// //      cualquier letra del alfabeto y verifique
// //      si es vocal o consonante

//Variables
let letra = prompt(`Por favor introduce una letra del abecedario`);
console.log(typeof(letra));
function VocalConsonante (letra){

    if(letra==`a`||letra==`e`||letra==`i`||letra==`o`||letra==`u`){
        return document.write(`La letra ${letra} es una vocal`);
    }else{
        return document.write(`La letra ${letra} es una consonante`);
    }
}
VocalConsonante(letra);

