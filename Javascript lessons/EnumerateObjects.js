const circle = {
    radius: 1,
    draw(){
        console.log("Drwaing the circle");
    }
}

for( key in circle) {

    console.log(key, circle[key]);

}


for( key of Object.keys(circle)) {

    console.log(key, circle[key]);
    
}

if('price' in circle) console.log('Yes, present');
else console.log('No, it is not present')

//Clone 1 

const copy1 = {};

for(key in circle){
    copy1[key]= circle[key];
}

console.log('copy1 is ', copy1);

//Clone 2

const copy2 = Object.assign({}, circle);

console.log('copy2 is ',copy2);

//Clone 3 

const copy3 = {... circle};

console.log('copy 3 is ',copy3);

//Math


let x = Math.random();
console.log(x);


//Dates

let now = new Date();
let date1 = new Date('2020-08-03');

console.log(now);
console.log(date1);



console.log('This is JS\'s latest version');

const mailBody = `This is Raj,
Thanks for adding me in your slack group.
I would choose JS's latest version
sending mail at ${now}`;

console.log(mailBody);
