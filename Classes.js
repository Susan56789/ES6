/**
 * Classes are a template for  creating objects
 * They encapsulate data with code to work on that data
 * Class methods are created with the same syntax as object methods
 * Always add a constructor(method)
 * If you do not define a constructor method, JavaScript will add an empty constructor method
 * Static class methods are defined on the class itself
 * You cannot call a static method on an object, only on an object class
 * */
 

 class Student{
 	constructor(name,age,city,joined){
 		this.name= name;
 		this.age = age;
 		this.city = city;
 		this.joined = joined;
 	}

 	course(x="BCOM"){
console.log("course: ",x)
 	}

 	static year(){
 		let date  = new Date();
 		
 		return date;
 	}
 }

console.log(Student.year())

 let student1 = new Student("Jane", 22,"Nakuru",2017)

 console.log(student1)
 student1.course('Acturial Science')
 

 let student2 = new Student("Moses", 24, "Kisumu", 2020)
 console.log(student2)
 student2.course("Mathematics")