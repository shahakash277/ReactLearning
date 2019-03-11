// ... use as Spread Oprator
const numbers=[1,2,3,4,5];
const newArray=[...numbers, 6];

console.log(newArray); 

const person={
	name:'Akash'
}
const newPerson={
	...person,
	age:24
}
console.log(newPerson);

// new Es7 syntax 
const filter= (...args) =>  args.filter(e=>e===1);

console.log(filter(1,2,3));