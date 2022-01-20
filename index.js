// RUN THIS PROJECT BY TYPING IN NODE INDEX.JS IN THE TERMINAL AND FOLLOW ATM INSTRUCTION
// PIN IS 1234, listed on ATM.JS file
// ACCOUNT BALANCE IS 6000 listed on ATM.JS file

let atmFile = require('./atm');
const prompt = require('prompt-sync')();

let userInput;
let myPin = atmFile.validatePin()
while(!myPin){
    
console.log("Sorry wrong pin, re-type pin please.");
userInput = prompt ("Re enter your pin please")
}
function mainMenu() {
let choice = prompt("Please make a slection. \
Enter 1 for Balance, \
Enter 2 for Withdraw, \
Enter 3 for Deposit. \
")
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
    mainMenu()

    }
}
mainMenu()