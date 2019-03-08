//Create Class Human 
class Human{
	constructor(gender){
		this.gender=gender;
	}
	getGender(){
		return this.gender;
	}
}

//Create Person Class
class Person extends Human{
	constructor(){
		//when you extends class super() is mandetory
		super('male')
		//Add Property 
		this.name= 'Akash';
	}

	//Method will print Name
	getName(){
		return this.name;	
	}
}
 
 //creating a Person Object 
const person=new Person();
console.log('print person Name : '+ person.getName()+ ' Gended : '+person.getGender());
