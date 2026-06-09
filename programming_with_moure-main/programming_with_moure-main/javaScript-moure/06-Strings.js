//Comentario simple 

/*Comentario
de 
varias 
líneas*/

//Texto con saltos de línea se definen con los acentos invertidos como comillas
let text=`Esto
es 
un
texto
con
saltos
de
línea`
console.log(text)
let name = "Luis"
let greetings = "Hola, " + name + "!"

console.log(greetings)

//Métodos de strigns.

console.log(greetings.toUpperCase())
console.log(greetings.toLowerCase())
console.log(greetings.indexOf("Hola"))
console.log(greetings.includes("Hola"))

//Template literals (pantillas literales) es importante utilizar esto con los acentos invertidos.
let new_name="Lucho"
console.log((`Hola, ${new_name}`))