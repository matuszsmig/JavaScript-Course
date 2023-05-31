const http = require('http');
const url = require('url');

let fromButton = document.getElementById("submitBtn");


let itr = 0;

let rooms = {OnePersonWithTV: 1, OnePersonWithBath: 4, OnePersonWithBathTV:0,
    TwoPersonWithTV: 2, TwoPersonWithBath: 2, TwoPersonWithBathTV:1};

function getData() {
    let myContent = document.getElementById("cmd").value;
    let data = myContent.split(" ");
    if (data[0] == "add"){
        addReservation(data);
        localStorage.setItem(data[1] + data[2] + data[3], myContent);
    } else if (data[0] == "remove"){
        localStorage.removeItem(data[1] + data[2] + data[3]);
    } else if (data[0] == "show"){
        showRooms();
    } else {
        console.log("Invalid command")
    }
}

function addReservation(data){
    let myTypeOfRoom;
    let reservation = {typeRoom: "", nameOfReservaion: "", rervationDate: ""};
    if ((data[1] == "one" || data[1] == "1") && data[2] == "TV"){
        if (rooms.OnePersonWithTV != 0){
            reservation.typeRoom = "OnePersonWithTV";
            rooms.OnePersonWithTV -= 1;
            myTypeOfRoom = rooms.OnePersonWithTV;
        }
        else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "one" || data[1] == "1") && data[2] == "Bath"){
        if (rooms.OnePersonWithBath != 0){
            reservation.typeRoom = "OnePersonWithBath";
            rooms.OnePersonWithBath -= 1;
            myTypeOfRoom = rooms.OnePersonWithBath;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "one" || data[1] == "1") && data[2] == "Bath/TV"){
        if (rooms.OnePersonWithBathTV != 0){
            reservation.typeRoom = "OnePersonWithBathTV";
            rooms.OnePersonWithBathTV -= 1;
            myTypeOfRoom = rooms.OnePersonWithBathTV;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "two" || data[1] == "2") && data[2] == "TV"){
        if (rooms.TwoPersonWithTV != 0){
            reservation.typeRoom = "TwoPersonWithTV";
            rooms.TwoPersonWithTV -= 1;
            myTypeOfRoom = rooms.TwoPersonWithTV;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "two" || data[1] == "2") && data[2] == "Bath"){
        if (rooms.TwoPersonWithBath != 0){
            reservation.typeRoom = "TwoPersonWithBath";
            rooms.TwoPersonWithBath -= 1;
            myTypeOfRoom = rooms.TwoPersonWithBath;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "two" || data[1] == "2") && data[2] == "Bath/TV"){
        if (rooms.TwoPersonWithBathTV != 0){
            reservation.typeRoom = "TwoPersonWithBathTV";
            rooms.TwoPersonWithBathTV -= 1;
            myTypeOfRoom = rooms.TwoPersonWithBathTV;
        } else {
            console.log("can't reserve");
            return false;
        }
    }
    if (data[3]){
        reservation.rervationDate = data[3];
    } else {
        console.log("date is valid");
        myTypeOfRoom += 1;
        return false;
    }
    if (data[4] && data[5]){
        reservation.nameOfReservaion = JSON.stringify(data[4]) + " " + JSON.stringify(data[5]);
    }
    itr += 1;
    return reservation;

}

function showRooms(){
    for (const [key, value] of Object.entries(rooms)) {
        if (value > 0){
            console.log(key);
        }
      }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let myTimer = 0;
myInterval = setInterval(random, 1000);

let div1 = document.querySelector('div1');
let div2 = document.querySelector('div2');
let div3 = document.querySelector('div3');
div1.style.position = "relative";
div2.style.position = "relative";
div3.style.position = "relative";
//div1.style.filter = ('hueRotate:240deg;');

function random(){
    myTimer += 1;
    if (myTimer === 6){
        window.requestAnimationFrame(step);
    }
    if (myTimer === 12){
        let myBody = document.querySelector(nav);
        myBody.style.backgroundImage 
        myTimer = 0;
    }
}

let start, previousTimeStamp;
let done = false;
let count;
let stopId;
let stopFlag = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    count = Math.min(0.1 * elapsed, 200);
    div1.style.left = `${count}px`;
    div2.style.left = `${count}px`;
    div3.style.left = `${-count}px`;
    if (count === 400){
        done = true;
        stopId = window.requestAnimationFrame(step);
        stopFlag = true;
    } 
  }

  if (elapsed < 10000) {
    // Stop the animation after 2 seconds
    timestamp = 0;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}


window.addEventListener("scroll", stopTheCont);
window.addEventListener("mousemove", stopTheCont);
window.addEventListener("keypress", stopTheCont);

function stopTheCont(){ 
    cancelAnimationFrame(stopId);
    if (stopFlag){
        div1.style.left = `-200px`;
        div2.style.left = `0px`;
        div3.style.left = `0px`;
    }
    myTimer = 0;
}

let myForm = document.querySelector("form");
let resButton = document.getElementById("reservation");

let flag = false;

resButton.addEventListener("click", buildForm2);

function buildForm2(){
    if (!flag) {
        flag = true;
        myForm.style.display = "block";
    } else {
        flag = false;
        myForm.style.display = "none";
    }

}

let imieNazwisko;
let rodzaj;
let udogodnienia;
let dataRozpoczecia;
let dataZakonczenia;

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    imieNazwisko = document.getElementById('name').value;
    rodzaj = document.getElementById('num_room').value;
    udogodnienia = document.getElementById('room_type').value;
    dataRozpoczecia = document.getElementById('start').value;
    dataZakonczenia = document.getElementById('end').value;

    myForm.reset();
});

// Tworzenie serwera HTTP
//const server = http.createServer((req, res) => {
//    // Pobranie ścieżki URL żądania
//    const requestUrl = url.parse(req.url, true);
//  
//    if (requestUrl.pathname === '/zapisz-dane' && req.method === 'GET') {
//      // Pobranie danych z parametrów URL
//      const imieNazwisko = requestUrl.query.imieNazwisko;
//      const rodzaj = requestUrl.query.rodzaj;
//      const udogodnienia = requestUrl.query.udogodnienia;
//      const dataRozpoczecia = requestUrl.query.dataRozpoczecia;
//      const dataZakonczenia = requestUrl.query.dataZakonczenia;
//  
//      const fs = require('fs');
//      const newData = {
//        imieNazwisko,
//        rodzaj,
//        udogodnienia,
//        dataRozpoczecia,
//        dataZakonczenia,
//      };
//      const jsonData = JSON.stringify(newData);
//  
//      fs.writeFile('zerwacje.json', jsonData, (err) => {
//        if (err) {
//          console.error('Wystąpił błąd podczas zapisywania danych:', err);
//          res.statusCode = 500;
//          res.end('Błąd podczas zapisywania danych');
//        } else {
//          console.log('Dane zostały zapisane:', jsonData);
//          res.statusCode = 200;
//          res.end('Dane zostały zapisane');
//        }
//      });
//    } else {
//      res.statusCode = 404;
//      res.end('Nie znaleziono');
//    }
//  });
//  const port = 3000;
//  server.listen(port, () => {
//    console.log(`Serwer nasłuchuje na porcie ${port}`);
//  });

function buildForm(){
    if (!flag){
        let div = document.createElement("div");
        myForm.appendChild(div);
        let label = document.createElement("label");
        let labeltext = document.createTextNode("Imię:");
        label.appendChild(labeltext);
        label.className = "form-label";
        div.appendChild(label);
        let input = document.createElement("input");
        input.className = "form-control";
        div.appendChild(input);
        label = document.createElement("label");
        labeltext = document.createTextNode("Nazwisko:");
        label.appendChild(labeltext);
        label.className = "form-label";
        div.appendChild(label);
        input = document.createElement("input");
        input.className = "form-control";
        div.appendChild(input);

        div = document.createElement("div");
        labeltext = document.createTextNode("Wybierz rodzaj pokoju:");
        div.appendChild(labeltext)
        myForm.appendChild(div);
        let select = document.createElement("select");
        select.className = "form-select";
        select.style.width = "200px";
        div.appendChild(select)
        let option = document.createElement("option");
        labeltext = document.createTextNode("Pokój jednoosobowy");
        select.appendChild(option);
        option = document.createElement("option");
        labeltext = document.createTextNode("Pokój dwuoosobowy");
        select.appendChild(option);

        div = document.createElement("div");
        labeltext = document.createTextNode("Wybierz udogodnienia: ");
        div.appendChild(labeltext)
        myForm.appendChild(div)
        let br = document.createElement("br");
        div.appendChild(br)
        let div2 = document.createElement("div");
        div2.className = "form-check form-check-inline";
        div.appendChild(div2);
        input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        div2.appendChild(input);
        label = document.createElement("label");
        labeltext = document.createTextNode("Tv");
        label.appendChild(labeltext);
        label.className = "form-check-label";
        div2.appendChild(label);
        div2 = document.createElement("div");
        div2.className = "form-check form-check-inline";
        div.appendChild(div2);
        input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        div2.appendChild(input);
        label = document.createElement("label");
        labeltext = document.createTextNode("Łazienka");
        label.appendChild(labeltext);
        label.className = "form-check-label";
        div2.appendChild(label);

        div = document.createElement("div");
        labeltext = document.createTextNode("Wybierz date pobytu: ");
        div.appendChild(labeltext)
        myForm.appendChild(div)
        div.appendChild(br)
        input = document.createElement("input");
        input.className = "calendar";
        input.type = "date";
        div.appendChild(input);
        div.appendChild(br);

        label = document.createElement("label");
        labeltext = document.createTextNode("Komenda: ");
        label.className = "form-label";
        label.appendChild(labeltext);
        myForm.appendChild(label);
        input = document.createElement("input");
        input.className = "form-control";
        input.id = "cmd";
        myForm.appendChild(input);
        let button = document.createElement("button");
        button.className = "btn btn-primary"
        button.id = "submitBtn"
        labeltext = document.createTextNode("Submit");
        button.appendChild(labeltext);
        myForm.appendChild(button);
    }
    flag = true
    
}