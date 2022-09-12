
/**
 * Template literals provide an easy way to interporlate variables and expressions into strings(Interpolation)
 * Uses back-ticks(``) rather than the quote("") to define a string
 * Allows one to use both single and double quotes inside a string
 * Allows multiline strings
 * 
 * **/


let fname= "Susan"
let lname= 'Wairimu'

//Interpolation
const fullname = `${fname} ${lname}`

console.log(fullname)

//variable substitutions
let greeting = `Welcome ${fname} ${lname} !`
console.log(greeting)

//Multiline strings
let text = `
Hello there
How are you doing
Hope you're having fun
Enjoy your day
`
console.log(text)
