"use strict"
let atmFile = require('./atm');
const prompt = require('prompt-sync')();

let myPin = atmFile.validatePin()
while(!myPin){
console.log("Sorry wrong pin, re-type pin please.")
}
if(myPin){
mainMenu()
}

function mainMenu(){
let choice = prompt("Make a slection")
switch(choice){
case '1':
    atmFile.getBalance()
    break;
case '2':
    atmFile.withdraw()
    break;
case '3':
    atmFile.deposit()
    break;
default:
    console.log("Invalid Selection, please try agian.")
}
}
