function placesToVisit(){

    let url = './places.json';
    let xhr = new XMLHttpRequest();

    xhr.open('GET',url);

    xhr.onload =function () {
        document.getElementById('places').innerText = xhr.responseText;
    }

    xhr.send();
    

}