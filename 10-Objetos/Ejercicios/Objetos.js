//Declaramos un objeto

let computador ={

marca:`Asus`,
procesador:`Core i9`,
CantidadRAM:8,
enciende:true,
puertos:[`usb tipo A`, `hdmi`, `usb tipo C`,`Jack 3mm`],
encenderApagar : function(onOff){
if(onOff === 1){
    return `Encendio`;
}else{
    return `Apago`;
}
}
}

//Acceder a los valores


alert(`El computador de marca ${computador.marca} tiene una memoria RAM de ${computador[`CantidadRAM`]}`);

let onOff=Number(prompt("Para encender la computadora presione 1"));

alert(`El computador ${computador.encenderApagar(1)}`);

//Desestructuracion
computador.marca = `Lenovo`;
let {marca,procesador,CantidadRAM,enciende,puertos} = computador;
alert(`El computador de marca ${marca} tiene una memoria RAM de ${CantidadRAM}`);

