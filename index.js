"use strict"
let atmFile = require('./atm');
console.log(atmFile);

while(!validatePin){
alert("Sorry wrong pin, re-type pin please.")
}

let choice = prompt("Make a slection")
switch(choice){
case '1':
    getBalance
    break;
case '2':
    withdraw
    break;
case '3':
    deposit
    break;
default:
    alert("Invalid Selection, please try agian.")
}

