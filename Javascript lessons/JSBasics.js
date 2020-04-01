let name = 'raj';

//console.log(name)

let age = 30;

console.log(name+' '+age);

let address = null;

console.log(typeof address); 

let street = undefined;
console.log(typeof address);

let isActive = true;
console.log(isActive);
let marks;

marks = [56,76,39,98];

console.log(marks);

let user = {

    name:'Kat',
    age:29

};

console.log(user);

let language = ['Python','Javascript'];

console.log(language);


function greet(name){
    console.log('Hello '+name+'!')
}

greet('Katrina');

function sum(a,b){
    return a+b;
}

console.log(sum(10,40))

//Arrow functions
// Multi parameter

calculateCost = (costPerPerson,noOfPersons) => {
    return costPerPerson*noOfPersons;
};

console.log(calculateCost(2500,5));

//No parameter function

greetings = () => console.log('Welcome to ES6 Learning edition');
greetings();

//Single parameter function

greetings = _ => console.log(`Welcome to ES6, ${_}`);
greetings('Raj');



