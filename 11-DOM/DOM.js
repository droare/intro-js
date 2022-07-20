function Registrar(){
    //variables
    let nombres, apellidos, fechaNacimiento, genero, nivelAcademico;
    
    //Capturamos datos

    nombres = document.getElementById('txtNombre').value;
    apellidos = document.getElementById('txtApellidos').value;
    fechaNacimiento = document.getElementById('txtFechaNac').value;
    genero = document.getElementById('txtNombre').value;
}

//Funcion que realiza la interaccion para mostrar u ocultar el cuadro de texto para Otro
function SeleccionarGenero(){

//Variables

let rbOtro = document.getElementById("O");

rbMasculino.checked
//VALIDAMOS EL GENERO SELECCIONADO

if(rbOtro.checked === true){
document.getElementById('txtOtro').classList.remove('invisible');
document.getElementById('txtOtro').classList.add('visible');

}else{
    document.getElementById('txtOtro').classList.remove('visible');
    document.getElementById('txtOtro').classList.add('invisible');
}


}