//Regex - search date in the string

let input = 'Albert Einstein was born in Ulm, on 14/03/1879.'

let r = /\d{2}\/\d{2}\/\d{4}/;

console.log(input.match(r)[0]);

//Pattern match :email

let email = 'JohnDoe.@gmail.com'
let regx = /^[A-Za-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+\.?[A-Za-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+@[A-Za-z]+\.com$/;

//let regx=/[\w\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~]+(([\.][\w\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~]*)|([\w\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~]*))@gmail\.com$/;

//console.log(email.match(regx))


//Json excercise



let validateJSON = () => {

    try {
        let j1 = {key1: value1, key2: value2};
        

        parsed = JSON.stringify(j1);

        console.log('Valid Json');
       
    }
    catch(e) {
        console.log('Invalid Json');
        console.log(e.message);
    }
    
}

validateJSON();



//console.log(JSON.parse(j1));
// Object properties

let student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 }

console.log(Object.values(student));
