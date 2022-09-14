/**
 * For of loop is used to loop over an array, string
 * It loops through the values of an iterable object
 * **/


//Array
let incomes = [10000, 15000, 24000, 12000]

let total = 0

for(let income of incomes){
	total += income

	console.log('Total: ',total)

}


let cars = ['BMW ','Toyota ','Subaru ','Mercedes']
for (let c of cars){
	console.log("Cars:",c)
}


//String

let greeting= "Hello World"
for(let x of greeting){
console.log("Text:",x)	
}

