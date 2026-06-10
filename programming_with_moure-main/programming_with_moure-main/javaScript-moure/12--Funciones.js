// Functions 

//Simple structure

function myFunc(){
    console.log("Hello, this is a function!")
}

//The basic structure, with params

function myFunctionWithParams(name){
    console.log(`Helo, ${name}!`)
}

myFunctionWithParams("Luis")

//Anonimous functions

const myFunc2 = function(name){
    console.log(`Hello, ${name}!`)
}

myFunc2("Luis Elcure")

//Arrow function
const myFunc3= (name)=>{
    console.log(`This is an arrow function by ${name}`)
}

myFunc3("Luis José Elcure Rivero")

//Default functions

function sumFunc(a =0, b=0)/* By defining the params prebiously, we prevent input errors from the user*/{
    console.log(a + b)
}

sumFunc(5,2)

// Returning values

function mult(a=0,b=0){
    return a * b //The keyword "return" just return the operation out of the function 
}

let result= mult(5,10)
console.log(result)