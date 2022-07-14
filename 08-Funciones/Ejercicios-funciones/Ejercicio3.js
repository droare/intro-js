// 3. Realizar un juego de piedra, papel o tijera, en el cual el usuario ingrese
//su nombre y la opcion que quiera.


let nombre = prompt(`Por favor introduce tu nombre`)
let opcion = Number(prompt(`Por favor selecciona 1- Piedra 2- Papel 3- Tijera`))

function PiedraPapelTijera(opcion){
    let rango = 3;   
    let numRandom = Math.ceil(Math.random()*rango);
    console.log(numRandom);

if(opcion == 1 && numRandom==1){
    return document.write(`Lo sentimos ${nombre} es un empate entre Piedra y Piedra`);
}else if(opcion == 1 && numRandom==2){
    return document.write(`Lo sentimos ${nombre} has perdido el papel le gano a tu piedra :( `);
}else if(opcion == 1 && numRandom==3){
    return document.write(`Felicidades ${nombre} has ganado tu piedra vencio a la tijera`);
}else if(opcion == 2 && numRandom==1){
    return document.write(`Felicidades ${nombre} has ganado tu papel vencio a la  piedra`);    
}else if(opcion == 2 && numRandom==2){
    return document.write(`Lo sentimos ${nombre} es un empate entre Papel y Papel`);
}else if(opcion == 2 && numRandom==3){
    return document.write(`Lo sentimos ${nombre} has perdido la tijera le gano a tu papel :( `);
}else if(opcion == 3 && numRandom==1){
    return document.write(`Lo sentimos ${nombre} has perdido la piedra le gano a tu tijera :( `);
}else if(opcion == 3 && numRandom==2){
    return  document.write(`Felicidades ${nombre} has ganado tu tijera vencio al papel`);
}else if(opcion == 3 && numRandom==3){
    return document.write(`Lo sentimos ${nombre} es un empate entre Tijera y Tijera `);
}
}

PiedraPapelTijera(opcion);
