let var1 = window.prompt("Podaj wiadomość 1: ");
let var2 = window.prompt("Podaj wiadomość 2: ");
let var3 = window.prompt("Podaj wiadomość 3: ");
let var4 = window.prompt("Podaj wiadomość 4: ");
console.log(JSON.stringify(var1) + ":" + JSON.stringify(typeof(var1)));
console.log(JSON.stringify(var2) + ":" + JSON.stringify(typeof(var2)));
console.log(JSON.stringify(var3) + ":" + JSON.stringify(typeof(var3)));
console.log(JSON.stringify(var4) + ":" + JSON.stringify(typeof(var4)));

let myButton = document.getElementById("myBtn");
let formsVal1 = document.forms['myForms'].elements[0];
let formsVal2 = document.forms['myForms'].elements[1];

myButton.onclick = function() {
    console.log(JSON.stringify(formsVal1.value) + ":" + JSON.stringify(typeof(formsVal1.value)));
    console.log(JSON.stringify(formsVal2.value) + ":" + JSON.stringify(typeof(formsVal2.value)));
};