// ============================================================================
// BLOQUE 1: NIVEL PRINCIPIANTE
// ============================================================================

// EJERCICIO 1: Saludo básico
// Consigna: Crea una función llamada 'saludar' que reciba un parámetro 'nombre' 
// y devuelva una cadena que diga "Hola, [nombre]!".
// Respuesta esperada: saludar("Lucas") -> "Hola, Lucas!"
// ----------------------------------------------------------------------------

function greetings(name){
    console.log(`Helo ${name}`)
}

greetings("Luis")

// EJERCICIO 2: Suma de dos números
// Consigna: Crea una función llamada 'sumar' que reciba dos números como parámetros 
// y retorne el resultado de su suma.
// Respuesta esperada: sumar(5, 7) -> 12
// ----------------------------------------------------------------------------
function sumar(num1,num2){
    let result =num1 + num2
    console.log(result) 
    return result
}

sumar(5,7)
// EJERCICIO 3: Par o Impar
// Consigna: Crea una función llamada 'esPar' que reciba un número entero 
// y devuelva un valor booleano (true si es par, false si es impar).
// Respuesta esperada: esPar(4) -> true; esPar(7) -> false
// ----------------------------------------------------------------------------
function esPar(num){
    return num % 2 === 0

}
console.log(esPar(4))

// EJERCICIO 4: Área de un triángulo
// Consigna: Crea una función flecha (arrow function) llamada 'calcularAreaTriangulo' 
// que reciba la base y la altura de un triángulo y devuelva su área.
// Respuesta esperada: calcularAreaTriangulo(10, 5) -> 25
// ----------------------------------------------------------------------------
const triangleArea = (base, height) =>{
    let area = (base * height)/2
    console.log(area)
    
}
triangleArea(5,7)
// EJERCICIO 5: Parámetros por defecto
// Consigna: Crea una función llamada 'convertirMoneda' que tome una cantidad en USD 
// y una tasa de cambio. Si no se le proporciona una tasa de cambio, por defecto debe ser 1.0. 
// La función debe retornar la cantidad multiplicada por la tasa.
// Respuesta esperada: convertirMoneda(50) -> 50; convertirMoneda(50, 0.9) -> 45
// ----------------------------------------------------------------------------
function convertirMoneda(amounth, rate=1.0){
    return amounth * rate
    
}
let exchange = convertirMoneda(100)
console.log(`La tasa de cambio para la cantidad solicitada es de ${exchange}`)

// ============================================================================
// BLOQUE 2: NIVEL INTERMEDIO
// ============================================================================

// EJERCICIO 6: Palíndromo
// Consigna: Crea una función llamada 'esPalindromo' que reciba una palabra (string) 
// y determine si se lee igual de izquierda a derecha que de derecha a izquierda 
// (ignora mayúsculas/minúsculas). Debe retornar true o false.
// Respuesta esperada: esPalindromo("Radar") -> true; esPalindromo("JavaScript") -> false
// ----------------------------------------------------------------------------

function isPalindrome(word){
    const original= word.split("")
    const reverse =original.reverse()
    return original === reverse
}
console.log("Para el caso estudiado el resultado del palíndrome es: ",isPalindrome("Radar"))

// EJERCICIO 7: Filtrar números pares (Callback)
// Consigna: Crea una función llamada 'filtrarArreglo' que acepte un arreglo de números 
// y una función callback. La función debe retornar un nuevo arreglo con los elementos 
// que cumplan con la condición de la función callback (puedes usar el método .filter() o un ciclo).
// Respuesta esperada: filtrarArreglo([1, 2, 3, 4, 5], (n) => n % 2 === 0) -> [2, 4]
// ----------------------------------------------------------------------------


// EJERCICIO 8: Factorial Recursivo
// Consigna: Crea una función recursiva llamada 'factorial' que calcule el factorial 
// de un número entero positivo dado ($n! = n \times (n-1) \times ... \times 1$).
// Respuesta esperada: factorial(5) -> 120
// ----------------------------------------------------------------------------


// EJERCICIO 9: Contador Clásico (Closure)
// Consigna: Crea una función llamada 'crearContador' que no reciba parámetros y 
// devuelva otra función. Cada vez que se invoque esa función devuelta, debe incrementar 
// un contador interno en 1 y retornar el valor actual del contador.
// Respuesta esperada: 
// const contador = crearContador();
// contador() -> 1; contador() -> 2
// ----------------------------------------------------------------------------


// EJERCICIO 10: Argumentos Variables (Rest Parameters)
// Consigna: Crea una función llamada 'promediar' que reciba una cantidad indeterminada 
// de números como argumentos (utilizando el operador rest `...`) y devuelva su promedio.
// Respuesta esperada: promediar(10, 20, 30, 40) -> 25
// ----------------------------------------------------------------------------


// ============================================================================
// BLOQUE 3: NIVEL AVANZADO / EXPERTO
// ============================================================================

// EJERCICIO 11: Composición de Funciones (Pipe)
// Consigna: Crea una función llamada 'pipe' que tome dos funciones como argumentos (`f` y `g`) 
// y devuelva una nueva función que aplique primero `f` al argumento y luego `g` al resultado.
// Respuesta esperada: 
// const duplicar = x => x * 2;
// const alCuadrado = x => x * x;
// pipe(duplicar, alCuadrado)(3) -> 36  // (3 * 2) = 6 -> 6 * 6 = 36
// ----------------------------------------------------------------------------


// EJERCICIO 12: Temporizador Asíncrono con Promesas
// Consigna: Crea una función llamada 'esperarYEjecutar' que tome un mensaje (string) 
// y un tiempo en milisegundos. Debe retornar una Promesa que se resuelva después del tiempo 
// indicado devolviendo el mensaje en mayúsculas.
// Respuesta esperada: esperarYEjecutar("hola", 1000).then(res => console.log(res)) -> Imprime "HOLA" tras 1 segundo.
// ----------------------------------------------------------------------------


// EJERCICIO 13: Curryficación Básica (Currying)
// Consigna: Crea una función llamada 'multiplicarCurry' que tome un número `a` 
// y retorne otra función que tome un número `b`. Esta segunda función debe retornar el producto de `a * b`.
// Respuesta esperada: multiplicarCurry(3)(5) -> 15
// ----------------------------------------------------------------------------


// EJERCICIO 14: Memoización (Cache de funciones)
// Consigna: Crea una función llamada 'memoizar' que reciba una función de un solo argumento 
// y devuelva una versión optimizada de la misma que guarde en caché los resultados previos 
// para no tener que volver a calcularlos si se repite el argumento.
// Respuesta esperada: 
// const calcularCubo = memoizar(x => x * x * x);
// calcularCubo(3) -> 27 (calculado); calcularCubo(3) -> 27 (retornado directamente desde la caché)
// ----------------------------------------------------------------------------


// EJERCICIO 15: Función Invocable una Sola Vez (Once)
// Consigna: Crea una función de orden superior llamada 'ejecutarUnaVez' que reciba una función 
// callback. Debe devolver una nueva función que solo ejecute el callback la primera vez que se la llama. 
// En llamadas subsecuentes, debe retornar `undefined` sin importar los argumentos que reciba.
// Respuesta esperada:
// const inicializar = ejecutarUnaVez(() => "Configuración completada");
// inicializar() -> "Configuración completada"; inicializar() -> undefined
// ----------------------------------------------------------------------------