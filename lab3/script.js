let set = document.getElementById("set");
let deleteB = document.getElementById("deleteB");
let add = document.getElementById("add");

let header = document.querySelector("header");
let nav = document.querySelector("nav");
let aside = document.querySelector("aside");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

set.addEventListener("click", changeAll);
deleteB.addEventListener("click", deleteAll);
add.addEventListener("click", addText);

let blockquote = document.querySelector("blockquote");

let myText = ["Natenczas Wojski chwycił na taśmie przypięty Swój róg bawoli, ", 
"długi, cętkowany, kręty Jak wąż boa, oburącz do ust go przycisnął ,", 
"Wzdął policzki jak banię, w oczach krwią zabłysnął, Zasunął wpół powieki, ", 
"wciągnął w głąb pół brzucha I do płuc wysłał z niego cały zapas ducha, ", 
"I zagrał: róg jak wicher, wirowatym dechem Niesie w puszczę muzykę i podwaja echem. ", 
"Umilkli strzelcy, stali szczwacze zadziwieni Mocą, czystością, dziwną harmoniją pieni. ", 
"Starzec cały kunszt, którym niegdyś w lasach słynął, Jeszcze raz przed uszami myśliwców rozwinął; ",
"Napełnił wnet, ożywił knieje i dąbrowy, Jakby psiarnię w nie wpuścił i rozpoczął łowy. ",
"Bo w graniu była łowów historyja krótka: Zrazu odzew dźwięczący, rześki: to pobudka; ", 
"Potem jęki po jękach skomlą: to psów granie; A gdzieniegdzie ton twardszy jak grzmot: to strzelanie."]

let itr = 0;

function addText(){
    if (itr != myText.length){
        let newtext = document.createTextNode(myText[itr]);
        blockquote.appendChild(newtext);
        itr+=1;
    }
    if(itr == myText.length){
        add.disabled = true;
    }
}

function changeAll(){
    changeHeader();
    changeNav();
    changeAside();
    changeMain();
    changeFooter();
}

function deleteAll(){
    removeHeader();
    removeNav();
    removeAside();
    removeMain();
    removeFooter();
}

function changeHeader(){
    header.style.border = "1px solid #A8A8A8";
    header.style.backgroundColor = "#EFF";
    header.style.marginBottom = "10px";
    header.style.padding = "5px";
}

function changeNav(){
    nav.style.border = "1px solid #A8A8A8";
    nav.style.backgroundColor = "#EFF";
    nav.style.marginBottom = "10px";
    nav.style.float = "left";
    nav.style.width = "200px";
}

function changeAside(){
    aside.style.border = "1px solid #A8A8A8";
    aside.style.backgroundColor = "#EFF";
    aside.style.marginBottom = "10px";
    aside.style.padding = "5px";
    aside.style.float = "right";
    aside.style.width = "50%";
}

function changeMain(){
    main.style.border = "1px solid #A8A8A8";
    main.style.backgroundColor = "#EFF";
    main.style.marginBottom = "10px";
    main.style.padding = "5px";
    main.style.float = "left";
    main.style.width = "40%";
}

function changeFooter(){
    footer.style.border = "1px solid #A8A8A8";
    footer.style.backgroundColor = "#EFF";
    footer.style.marginBottom = "10px";
    footer.style.float = "left";
    footer.style.width = "100%";
}


function removeHeader(){
    header.style.border = "unset";
    header.style.backgroundColor = "unset";
    header.style.marginBottom = "unset";
    header.style.padding = "unset";
}

function removeNav(){
    nav.style.border = "unset";
    nav.style.backgroundColor = "unset";
    nav.style.marginBottom = "unset";
    nav.style.float = "unset";
    nav.style.width = "unset";
}

function removeAside(){
    aside.style.border = "unset";
    aside.style.backgroundColor = "unset";
    aside.style.marginBottom = "unset";
    aside.style.padding = "unset";
    aside.style.float = "unset";
    aside.style.width = "unset";
}

function removeMain(){
    main.style.border = "unset";
    main.style.backgroundColor = "unset";
    main.style.marginBottom = "unset";
    main.style.padding = "unset";
    main.style.float = "unset";
    main.style.width = "unset";
}

function removeFooter(){
    footer.style.border = "unset";
    footer.style.backgroundColor = "unset";
    footer.style.marginBottom = "unset";
    footer.style.float = "unset";
    footer.style.width = "unset";
}