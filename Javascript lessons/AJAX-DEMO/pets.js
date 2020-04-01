getPets = () => {
    
    let url = './pets.json';
    let xhr = new XMLHttpRequest();

    xhr.open('GET',url);

    xhr.onload = function(){
        document.getElementById('pets').innerText = xhr.responseText;
    }

    xhr.send();
    
}