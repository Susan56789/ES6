/**
 * Default parameters allow named parameters to be initialized
 * with default value if no value or undefined is passed
 * */
 
 function multiply(a, b=3){
 	return a*b
 }

 console.log(multiply(4))