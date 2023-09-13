// html dom events
const div1 = document.getElementById("myDIV");
function myFunction(){
    div1.style.animation = "mymove 4s 2";
}
div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationiteration", myRepatFunction)
div1.addEventListener("animationend", myEndFunction);

function myStartFunction(){
    this.innerHTML = "The animation has starte";
    this.style.backgroundColor = "pink";
}

function myRepatFunction(){
    this.innerHTML = "The animation was played again";
    this.style.backgroundColor = "lightblue";
}

function myEndFunction(){
    this.innerHTML = "The animation has completed";
    this.style.backgroundColor = "lightgray"
}

//show date
function showDate(){
    document.getElementById("d-h2").innerHTML=Date();
}

//bulb on/off
function bulbOff(){
    document.getElementById("img").src ="images/off.gif";
}
function bulbOn() {
    document.getElementById("img").src ="images/on.gif";
}

//font color change
function fontChange(){
    document.getElementById("h2-2").style.fontSize="100px";
}

//show//hide
function show(){
    document.getElementById("c-img").style.display ="block";
}
function hide(){
    document.getElementById("c-img").style.display ="none";
}

//document.write
function DWrite(){
    document.write("Hello Marjib");
}

//window alert
function walert(){
    window.alert("Hellow Window Alert");
}
//console log
function clog(){
    console.log("Hellow Console Log");
}

// variable
let number1, number2, data;
number1 = 50;
number2 =35;

data = number1 + number2;

function vOutPut(){
    document.getElementById("vh2").innerHTML =data;
}

