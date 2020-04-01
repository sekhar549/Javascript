let myIcon = document.querySelector('img');

myIcon.onclick = function(){

    let mysrc = myIcon.getAttribute('src');

    if(mysrc == 'images/bluefox.jpg'){
        myIcon.setAttribute('src','images/firefox-icon.png');
    }
    else{
        myIcon.setAttribute('src','images/bluefox.jpg');
    }
}