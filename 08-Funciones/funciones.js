
//Funcion sin parametros

function Suma(){

alert(`La suma es ${2+2}`)

}

Suma();

//Funcion con parametros

function SumaParametros(num1,num2){

    alert(`La suma es ${num1 + num2}`)
    
    }

SumaParametros(2,8);


//Funcion con return

function SumaParametrosReturn(num1,num2){

    return num1 + num2;
    
    }

var mensaje = SumaParametrosReturn(13,52);
alert(mensaje);

// funcion anonima

var mensaje = function(num1,num2){

    return `La suma es ${num1+num2}`
}

alert(mensaje(2,3));

var mensaje1 = (num1,num2) => `La suma es ${num1 + num2}`;

alert(mensaje1(1,3));