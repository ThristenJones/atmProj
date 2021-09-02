"use strict"
let atmFile = require('./atm');


while(!validatePin){
console.log("Sorry wrong pin, re-type pin please.")
}

let choice = prompt("Make a slection")
switch(choice){
case '1':
    atmFile.getBalance
    break;
case '2':
    atmFile.withdraw
    break;
case '3':
    atmFile.deposit
    break;
default:
    alert("Invalid Selection, please try agian.")
}

