/**
 * Spread Operator(...) allows us to copy all or part of and existing
 * array or object into another array or object
 * **/
 

 const ages = [22,23,26,30]
 const weight =[80,90,60,50]

 const combined = [...ages, ...weight]

 console.log("Combined:",combined)

//Assign the first and second items from ages to variables and put the rest in an array
 const [one,two, ...rest] = ages
console.log(one)
console.log(two)
 console.log(rest)

 //object
 const details ={
 	names:"Susan W",
 	gender:"Female"
 }
 const moreDetails ={
 	religion:"Christian",
 	country:"Kenya"
 }

 const allDetails = {...details, ...moreDetails}
 console.log(allDetails)