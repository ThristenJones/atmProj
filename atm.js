// RUN THIS PROJECT BY TYPING IN NODE INDEX.JS IN THE TERMINAL AND FOLLOW ATM INSTRUCTION
// PIN IS 1234, listed on ATM.JS file
// ACCOUNT BALANCE IS 6000 listed on ATM.JS file

let accountFile = require('./account');
const prompt = require('prompt-sync')();

function getBalance(){
let usersBalance = accountFile.balance
console.log(`Your account balance: $${usersBalance}`);
}

function withdraw(){
    const usersBalance = prompt("how much would you like to withdraw?")
    accountFile.balance = accountFile.balance - +usersBalance;
    console.log(`Successfuly withdrawn. Your account balance now remains: $${accountFile.balance}`);
}

function deposit(){
const usersBalance = prompt("How much would you like to deposit")
accountFile.balance = accountFile.balance + parseInt(usersBalance);
console.log(`Succesfully deposited. your account balance is: $${accountFile.balance}`)
}

function validatePin(){
    let usersPin = prompt("Please enter your pin")
    if( +usersPin === accountFile.pin){
        return true;
}
  else{
      return false;
    }
}

module.exports.getBalance = getBalance
module.exports.withdraw = withdraw
module.exports.deposit = deposit
module.exports.validatePin = validatePin
