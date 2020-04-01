let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName(){

    let myName = prompt('Please enter your name');

    if(!myName || myName == null){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla is cool, '+myName;
    }

}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+storedName;

}

myButton.onclick = function(){
    setUserName();
}
