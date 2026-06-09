// arrays 


//formas de definir un array
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]//método para introducir un valor 
myArray2 = new Array(3)//Esto define al array con 3 espacios vacíos reservados.

console.log(myArray)
console.log(myArray2)

//myArray = ["Luis", "José", "RiseWave", 29, true]



myArray2[0] = "Luis"
myArray2[1] = "Rivero"
myArray2[2] = "RiseWave Tech"

console.log(myArray)
console.log(myArray2)

//Métodos con array push y pop

myArray.push("Luis")
myArray.push("Elcure")
myArray.push("RiseWave Tech")
myArray.push("29")

//Elimina el último y lo devuelve
myArray.pop()

// shift y unshift

//shift elimina elementos del principio de la lista
myArray.shift()

console.log(myArray.shift())

console.log(myArray)


//unshift Agrega los elementos nuevos al principio.

myArray.unshift("Luis", "Elcure")
console.log(myArray)

//length propiedad que permite saber la longitud del array (cantidad de elementos)

console.log(myArray.length)

//Clear

myArray=[]