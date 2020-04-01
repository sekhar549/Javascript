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

//Object Try out

let emp = {
    empNumber : 101,
    empName : 'Manasa',
    email : 'saidurga.j@test.com',
    swipein(){
        console.log(`Employee logged in is ${this.empName}`);
    }
}

// for(let prop in emp){
//     console.log(emp[prop]);
// }


//Classes and inheritence

class Employee{
    constructor(id,name,age){
        this.id =id;
        this.name = name;
        this.age = age;
    }

    swipein() { 
        console.log(`${this.name} has logged in at ${new Date()}`);
    }
    static code(){console.log('Employee coding');}
}

let e1 = new Employee(101,'Manasa',27);
e1.swipein();

class PartTimeEmployee extends Employee {

    constructor(id,name,age,contractperiod){
        super(id,name,age);
        this.contractperiod = contractperiod;
    }

}

let e2 = new PartTimeEmployee(102,'Raj',30, 3);
PartTimeEmployee.code();

//JSON to Object literal

let mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'

mobile = JSON.parse(mobJson);
console.log(`${mobile.seller.name} shipped a ${mobile.product.name} ${mobile.product.series} worth ${mobile.price} with productID : ${mobile.productId}`);



