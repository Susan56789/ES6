/**
 * The rest parameter  allows us to represent an indefinite number
 * of arguments as an array
 * By using rest parameter, a function can be called with any number of arguments
 * */
 

 function add(...r){

 	let sum = 0;
 	for (let i of r){
 		sum +=i
 	}

 	console.log(sum)
 }

 add(1,2,3)