"use strict";

let adderList = document.getElementById("linkList");
let adderButton = document.getElementById("adder");

/* 
    Click on the '+' button on the bottom right to insert a task cell
    The cell's text will be received as input 
*/
adderButton.onclick = function addItemCell() {
    // Obtain the text typed in the left box
    let inputName = document.getElementById("newName");
    let attempedName = inputName.value;

    // Obtain the text typed in the right box
    let inputVal = document.getElementById("newVal");
    let attempedVal = inputVal.value;

    // Create the div container of all elements to be pushed (text in left box, text in right box, etc.)
    let newItem = document.createElement("div");
    newItem.className = "adderHost";

    // Let this span contain the text typed in the left box
    let newName = document.createElement("span");
    newName.className = "adderName"
    newName.textContent = attempedName;
    
    // Let this span contain the text typed in the right box
    let newVal = document.createElement("span");
    newVal.className = "adderVal";
    newVal.textContent = attempedVal;

    // This span will be a hover image that has functionality to delete a task
    let newHover = document.createElement("span");
    newHover.className = "deleter";
    newHover.onclick = deleteItem;

    // Form the task and append it before the inputs (list should be task_1, task_2, ..., task_n, inputs)
    newItem.appendChild(newName)
    newItem.appendChild(newVal);
    newItem.appendChild(newHover);
    adderList.insertBefore(newItem, inputName);
    setTimeout(function() {newItem.style.opacity = 1;}, 500);
    
    clearValues([inputName, inputVal]);
} 

function deleteItem() {
    let target = this;
    target.parentNode.style.opacity = 0;
    setTimeout(function() {target.parentNode.remove();}, 500);
}

/*
    Set all elements' values in the array argument to an empty string
*/
function clearValues(elements) {
    for (let i = 0; i < elements.length; i++)
        elements[i].value = "";
}

let screen = document.getElementById("screen");

function solve(){
    screen.textContent = eval(screen.textContent);
}

function clear(){
    screen.textContent="";
}


let zero = document.getElementById("zero");
zero.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
    console.log("hi");
});

let one = document.getElementById("one");
one.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let two = document.getElementById("two");
two.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let three = document.getElementById("three");
three.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let four = document.getElementById("four");
four.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let five = document.getElementById("five");
five.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let six = document.getElementById("six");
six.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let seven = document.getElementById("seven");
seven.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let eight = document.getElementById("eight");
eight.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let nine = document.getElementById("nine");
nine.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let add = document.getElementById("add");
add.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let subtract = document.getElementById("subtract");
subtract.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let multiply = document.getElementById("multiply");
multiply.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let divide = document.getElementById("divide");
divide.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let decimal = document.getElementById("decimal");
decimal.addEventListener("click", function(e){
    screen.textContent += e.target.innerText;
});
let equals = document.getElementById("equals");
equals.addEventListener("click", solve);

let calc_clear = document.getElementById("calc_clear");
calc_clear.addEventListener("click", clear);