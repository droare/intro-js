//En un salon de clases nos pide diseñar un algoritmo que permita determinar el porcentaje de varones y el porcentaje de mujeres cantidad niños 78, cantidad niñas 43


const ninos = 78, ninas = 43, totalAlumnos = ninos + ninas;

let porceNinos = Math.round(ninos*100/totalAlumnos)
let porceNinas = Math.round(ninas*100/totalAlumnos)

document.write(`El porcentaje de varones es ${porceNinos}% y el porcentaje de mujeres es ${porceNinas}%`)