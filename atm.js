"use strict"
let accountFile = require('./account');
const prompt = require('prompt-sync')();

function getBalance(){
let usersBalance = accountFile.balance
console.log(usersBalance);
}

function withdraw(){
    usersBalance = prompt("how much would you like to withdraw?")
    accountFile.balance = accountFile.balance - usersBalance;
    console.log(accountFile.balance);
}

function deposit(){
usersBalance = prompt("How much would you like to deposit")
accountFile.balance = accountFile.balance + usersBalance;
console.log(accountFile.balance)
}

function validatePin(){
    usersPin =prompt ("Please enter your pin")
    if(usersPin === accountFile.pin){
        return true;
    }
}
module.exports.getBalance = getBalance
module.exports.withdraw = withdraw
module.exports.deposit = deposit
module.exports.validatePin = validatePin
