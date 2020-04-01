let num = [14,19];

console.log(num);

//console.log(num.length);

//add elements in the end

num.push(50,100,200);

console.log(num);

//add element at start of the array

num.unshift(5,10);
console.log(num);

//add elements in the middle

num.splice(2,0,'hi','bye');

console.log(num);

//find element in an array-primitive data type

console.log(num.indexOf(250, 1));

console.log(num.includes(100));

//find element of reference data type

let courses = [
    {id:1,name:'Maths'},
    {id:2,name:'Science'}
];

console.log(courses);

let obj = courses.find(function(course){
    return course.name == 'Arts'
});

console.log(obj);


//Array functions - forEach, map, filter, find

placesToVisit = ['Paris', 'New York', 'Switzerland'];

placesToVisit.forEach(place => {
    console.log('Trip to', place)
});

let Places_upper = placesToVisit.map(place => place.toUpperCase());
console.log(Places_upper);

console.log(placesToVisit.filter(place => place.length>5));

console.log(placesToVisit.find(place => place.length>5));


//Date object

console.log(new Date());