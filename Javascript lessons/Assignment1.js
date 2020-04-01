//Unique chars

let str = 'thequickbrownfoxjumpsoverthelazydog';

chars = str.split('');
let newlist = [];

chars.map(ch => 
    {
        if(newlist.indexOf(ch) ==-1) {
        newlist.push(ch);
        }
    }
    );

console.log(newlist);


//Palindrome

let str1 = '';

let isPal = function isPalindrome(str){
    l = str.length;

    for(i=0; i<=l/2;i++){

        if(str[i]!= str[l-1-i]) return false;

        return true;

    }

}

console.log(isPal(str1));


//Supress last name

let Shorten = name => {

    li = name.split(' ');
    l = li.length;
    result = '';

    for(i=0; i<l; i++){
        if(i != l-1) {
            result = result+li[i][0];
            result = result+'. ';
        }
        else result = result+li[i];
    }

    return result;

};

console.log(Shorten('Rama Krishna Narayan'));

//Date addition

date = new Date('2018-07-16');

date = date.setDate(date.getDate()+30);

console.log(date);

//Get current date and time formatted
let dateNow = () => {

    days = ['Sunday','Monday','Tuesday','Wdnesday','Thursday','Friday','Saturday'];
    
    console.log('Today is : ',days[new Date().getDay()]);

    t = new Date().toLocaleTimeString();
    mer = t.split(' ');
    hrs = mer[0];
    mins = mer[0].split(':');

    console.log(`Current time is : ${mins[0]}${mer[1]}:${mins[1]}:${mins[2]}`);
};

dateNow();

// verify date format

dt = new Date('12-19-1995');
if(dt == 'Invalid Date') console.log(false);
else console.log(true);

//functions

let aboveAverage = (marks) => {

    sum =0;
    for(item of marks){
        sum = sum + item;
    }

    avg = sum / marks.length;
    //console.log(avg);

    count = 0;

    for(item of marks){
        if(item > avg) count = count+1;
    }

    return(count*100/marks.length);

};

let freq = marks => {

    (f = []).length = 25;

    f.fill(0);

    for(i = 0; i<marks.length; i++) {
        f[marks[i]-1] = f[marks[i]-1] + 1;
    }
    
    return f;

}

let marks = [12,18,25,24,2,5,18,20,20,21];
console.log(aboveAverage(marks));

console.log(freq(marks));

//Time for Regex

let findName = (doc, pattern) => {

    if(doc.match(pattern)){
        console.log('match found');
    }
    else
        console.log('no match found');
}

let doc = 'Hello $Raj' ;

findName(doc, /\$/);