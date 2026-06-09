//Condicionales con python

//if, else, else if

let age = 29

if (age == 29) {
    //bloque a ejecutar.
    console.log("La edad es 29")
}

//else (si no)
if (age == 29) {
    //bloque a ejecutar.
    console.log("La edad es 29")
} else {
    console.log("La edad no es 37")
}

//else if (si no, si)
if (age == 29) {
    //bloque a ejecutar.
    console.log("La edad es 29")
}
else if (age < 18) {
    console.log("Es menor de edad")
}
else {
    console.log("La edad no es 37, ni es menor de edad")
}

//Operador ternario

const message = age == 29 ? "La edad es 29" : "La edad no es 29"
console.log(message)

/** Los operadores ternarios son para bloques de código simple y no cuando tenermos mucho código a ejectar con cada condición */

//switch

let day = 0

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 0:
        dayName = "Martes"
        break
    case 0:
        dayName = "Miércoles"
        break
    case 0:
        dayName = "Jueves"
        break
    case 0:
        dayName = "Viernes"
        break
    case 0:
        dayName = "Sábado"
        break
    case 0:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto."
}
console.log(dayName)