

// Shallow Copy and Deep Copy 
const a = {name: 'BMW', parts: {d: 10, e: 20}};
b = {...a};
b.name = 'Jaguar';
b.parts.d = 20;
console.log(b.parts.d); 
console.log(a.parts.d);

const a = {name: 'BMW', parts: {d: 10, e: 20}};
b = {...a};
b.name = 'Jaguar';

let b = {parts: {...a.parts}}
let b = {...a, parts: {...a.parts}}
b.parts.d = 20;
console.log(b.parts.d); 
console.log(a.parts.d);
console.log(a);
console.log(b);
// shallow copy 
// refrence assignment
// deep copy

const array = [1,5,6];
const sortedArray = array.sort();
for (var i = 0; i <sortedArray ;i++ )
console.log(sortedArray)


const person = {name :"shazia",age:"23"};
const copiedPerson = {...person};
console.log(person);
console.log(copiedPerson);
// copiedPerson = person;
person = copiedPerson;
// person.name = "sahil"
copiedPerson.name = "sahil"
console.log(person);
console.log(copiedPerson);