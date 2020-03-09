const circle = {

    radius : 5,
    color : 'red'
}



circle.area = 100;

circle.draw = function (){

    console.log('New function has been added')
}

console.log(circle);


//Value type and Reference types

let x = 100;

let y = x;

x =200;

console.log(x,y);