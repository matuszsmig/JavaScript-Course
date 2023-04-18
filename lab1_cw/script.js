let fromButton = document.getElementById("submitBtn");

let itr = 0;

let rooms = {OnePersonWithTV: 1, OnePersonWithBath: 4, OnePersonWithBathTV:0,
    TwoPersonWithTV: 2, TwoPersonWithBath: 2, TwoPersonWithBathTV:1};

function getData() {
    let myContent = document.getElementById("cmd").value;
    let data = myContent.split(" ");
    if (data[0] == "add"){
        addReservation(data);
    } else if (data[0] == "remove"){
        removeReservation(data);
    } else if (data[0] == "show"){
        showRooms();
    } else {
        console.log("Invalid command")
    }
    console.log(data)
    localStorage.setItem("myContent", myContent);
}

function addReservation(data){
    let reservation = {typeRoom: "", nameOfReservaion: "", rervationDate: ""};
    if ((data[1] == "one" || data[1] == "1") && data[2] == "TV"){
        if (rooms.OnePersonWithTV != 0){
            reservation.typeRoom = "OnePersonWithTV";
            rooms.OnePersonWithTV -= 1;
        }
        else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "one" || data[1] == "1") && data[2] == "Bath"){
        if (rooms.OnePersonWithBath != 0){
            reservation.typeRoom = "OnePersonWithBath";
            rooms.OnePersonWithBath -= 1;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "one" || data[1] == "1") && data[2] == "Bath/TV"){
        if (rooms.OnePersonWithBathTV != 0){
            reservation.typeRoom = "OnePersonWithBathTV";
            rooms.OnePersonWithBathTV -= 1;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "two" || data[1] == "2") && data[2] == "TV"){
        if (rooms.TwoPersonWithTV != 0){
            reservation.typeRoom = "TwoPersonWithTV";
            rooms.TwoPersonWithTV -= 1;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "two" || data[1] == "2") && data[2] == "Bath"){
        if (rooms.TwoPersonWithBath != 0){
            reservation.typeRoom = "TwoPersonWithBath";
            rooms.TwoPersonWithBath -= 1;
        } else {
            console.log("can't reserve");
            return false;
        }
    } else if ((data[1] == "two" || data[1] == "2") && data[2] == "Bath/TV"){
        if (rooms.TwoPersonWithBathTV != 0){
            reservation.typeRoom = "TwoPersonWithBathTV";
            rooms.TwoPersonWithBathTV -= 1;
        } else {
            console.log("can't reserve");
            return false;
        }
    }
    if (data[3]){
        reservation.rervationDate = data[3];
    } else {
        console.log("date is valid");
        return false;
    }
    if (data[4] && data[5]){
        reservation.nameOfReservaion = JSON.stringify(data[4]) + " " + JSON.stringify(data[5]);
    }
    return reservation;
}

function myLoad() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("myTextarea").value = myContent;
}