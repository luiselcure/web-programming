// sets
let mySet = new Set()

console.log(mySet)


//Sintáxis de inicialización
mySet = new Set(["Luis", "Elcure", "RiseWave"])//a pesar de conservar el orden de los elementos, los sets no indexan por número.

console.log(mySet)

//Métodos

//add y delete

mySet.add("https://risewave-tech.vercel.app")

console.log(mySet)

mySet.delete("Luis")// el método delete, no borra por índice sino por valor del elemento a borrar. tampoco sirve para borrar todo el set entero
//para eliminar un elemento, retorna "true" ya que hace una verificación de la existencia del elemento en el set antes de sacarlo del set.
console.log(mySet)

//has

if (mySet.has("Elcure")) {//hace comprovación de la existencia del elemento en el set.
    console.log("Contiene")
}
else {
    console.log("No contiene")
}
