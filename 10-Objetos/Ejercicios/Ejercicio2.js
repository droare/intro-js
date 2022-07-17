//Diseñar un algoritmo que permita calcular el salario mensual de un trabajador teniendo en cuenta los dias que trabajo y el valor de cada dia

const salarioDiario = 172.87;

let diasTrabajados = Number(prompt(`Por favor ingrese el numero de dias que trabajo el empleado `));

function Salario(salarioDiario,diasTrabajados){

    return salarioDiario*diasTrabajados;

}

document.write(`El salario del trabajador es de: ${Salario(salarioDiario,diasTrabajados)}`);