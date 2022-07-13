// 1. Crear un arreglo de 6 platillos
// 1.2. Mediante un ciclo for, mostrar todos los platillos
// 1.3. Mediante un for o  if, mostrar solo la valor 3 y 5 
// 1.4. Mediante un for o if, mostrar los elementos impares
// 1.5. Mediante un for o if, mostrar los elementos pares*/


//1
var arreglo = ['Pasta', 'Pizza', 'Torta', 'Tacos', 'Esquite', 'Hamburguesa'];

//1.2
document.write(`1.2<br>`);
for(var i=0;i<arreglo.length;i++){

    document.write(`El platillo ${i+1} es ${arreglo[i]}<br>`);

}

//1.3
document.write(`1.3<br>`);
for(var j=0;j<=arreglo.length;j++){

    if(j===4||j===6){
    document.write(`El platillo ${j} es ${arreglo[j]}<br>`);
    }else{
        document.write(``);
    }
}

//1.4
document.write(`1.4<br>`);
for(var k=0;k<arreglo.length;k++){

    if(k%2==1){
    document.write(`El platillo ${k+1} es ${arreglo[k]}<br>`);
    }else{
        document.write(``);
    }
}

//1.5
document.write(`1.5<br>`);
for(var l=0;l<arreglo.length;l++){

    if(l%2==0){
    document.write(`El platillo ${l+1} es ${arreglo[l]}<br>`);
    }else{
        document.write(``);
    }
}