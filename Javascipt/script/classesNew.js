 
//Classes with ES7 new way
/*
 For run this you have to install babel into your local machin and setup babel 
 then 	<script type="text/babel" src="./script/classesNew.js"></script> required type="text/babel"
run on server 'https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en'
*/
class Human{
	gender='male';
	getGender=()=> this.gender;
	
}



//Create Person Class
class Person extends Human{
	name = 'Akash';
	getName=()=> this.name;	
	
}
 
 console.log('ES7 supported Class syntax');
 //creating a Person Object 
var person=new Person();
console.log('print person Name : '+ person.getName()+ ' Gender : '+person.getGender());
