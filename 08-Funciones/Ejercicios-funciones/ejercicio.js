//Crear una aplicacion que permita a un profesor indicar cuantos alumnos tiene en su materia y cuantas notas recogio para cada estudiante y calcular el promedio individual y grupal.

//Variables globales

let cantidadAlumnos, cantidadNotas, datosGrupo;


//Solicitamos los datos

cantidadAlumnos = Number(prompt(`Ingresa la cantidad de alumnos del grupo`));
cantidadNotas = Number(prompt(`Ingresa la cantidad de notas a promediar de cada alumno`));

function SolicitarAlumnos(){
//Variables
let grupo = [];


    //Iteramos para solicitar los datos por alumno

for(let i=1;i<=cantidadAlumnos;i++){
//Variables 
let alumno = []
let nombre = prompt(`Ingresa el nombre del alumno ${i}`);
alumno.push(nombre);
alumno.push(SolicitarNotas(nombre));
grupo.push(alumno);
}

function SolicitarNotas(nombre){

    let notas = [];
    for(let j = 1; j <=cantidadNotas;j++){

        let nota = Number(prompt(`Ingresa la nota ${j} del estudiante ${nombre}`))
        notas.push(nota);
    }

return notas
}


return grupo;
}

datosGrupo = SolicitarAlumnos();

function Promedio(datosGrupo){
let promedioGrupal,sumaGrupal=0;
let grupoTexto="";

//Iteramos el array de grupo

for(let i = 0; i < datosGrupo.length; i++){

let alumno =datosGrupo[i];

    for(let j = 0; j<alumno.length;j++){

    nombre = alumno [0];
    let notas = alumno[1]
let suma=0;

    for(let n = 0; n<notas.length; n++){
        suma += notas[n]
    }

let promedio = suma/cantidadNotas
grupoTexto
sumaGrupal += promedio

texto += Concatenar(nombre, i, promedio);

    }
}
promedioGrupal=sumaGrupal / cantidadAlumnos;
return grupoTexto;
}

function Concatenar(nombre, posicion, promedio){
return `${posicion}. Nombre: ${nombre} Promedio: ${promedio} <br>`;

}
document.write(`Promedio Grupo <br><br> ${}`)
// console.log(SolicitarAlumnos());

