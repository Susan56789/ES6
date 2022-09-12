/***
 * Object destructuring allows us to extract data from arrays,
 *  objects and maps and set then into new distinct variables
 * */
 
 let student ={
 	firstname:"Susan",
 	lastname:"Wairimu",
 	city:"Nairobi",
 	dateofbirth:"1999"
 }

 //destructuring
 let {firstname, lastname, city} = student;

 console.log(firstname, lastname, city)

 // destructuring the objects with new names

 let {firstname:fn, lastname:ln, dateofbirth:dob}= student
 console.log(fn,ln,dob)