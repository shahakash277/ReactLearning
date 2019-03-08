let myName='Akash';
console.log('print myName variable value : '+myName);

const mySurNameConst="Shah";
console.log('print const mySurName Const : '+mySurNameConst);

//-------function old style------
function printMyName(name) {
	console.log('function print my name : '+ name);
}

console.log('calling function printMyName without argument');
printMyName(); //its print undefined as name don't assign value

//-------function old style printMyNameWithoutArgument direct use myName variable------
function printMyNameWithoutArgument() {
	console.log('function print my name : '+ myName);//it will display Akash. yeah you can access directly outside variable inside function.	
}

console.log('calling function printMyNameWithoutArgument without argument');
printMyNameWithoutArgument();

//------function with new Style of syntax----------
const printMyNameWithNewStyle=(name)=>{
	console.log('function print my name : ' +name);
}
console.log('calling function printMyNameWithNewStyle ');
printMyNameWithNewStyle(myName);

//------------function add two number--------
const addNumber=(num1,num2)=>{
	return num1 + num2;
}
console.log('Add two number 10, 20 ');
console.log(addNumber(10,20));

//------short function style--------
//you can remove () if argument is only one
// that should be single line 
const incrementNumber = num => num + 1;
console.log('incrementNumber 10'+ incrementNumber(10));