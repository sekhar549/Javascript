let x =100;
let y = 20;


console.log('pre increment '+(++x));

// let fname = 'Rajasekhar';
// let lname = 'Kunnuru'

// const fullname = `${fname} ${lname}`;

// console.log(fullname);

let hr = 14

if(hr > 6 && hr < 12) console.log('Good morning');
else if(hr >=12 && hr <=18) console.log("Good Afternoon");
else console.log('Good evening');


let user =  'vendor'

switch(user){

    case 'admin': console.log('Welcome admin'); break;
    case 'vendor': console.log('Welcome vendor'); break;
    default: console.log('You are not a user');

}


//Loop through the object 

const users = {
    name : 'Raj',
    age : 30,
    role : 'Automation Engineer'
};

for(key in users) {

    console.log(key +' '+users[key]);

}




// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function (radius) {
//             console.log('Drawing cirlce with radius ', radius);
//         }
//     }
// }

// const c1 = new Circle(5);

// console.log(c1.draw());





