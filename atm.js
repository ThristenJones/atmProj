"use strict"
let accountFile = require('./account');
const prompt = require('prompt-sync')();

function getBalance(){
let usersBalance = accountFile.balance
return usersBalance;
}

function withdraw(){
    usersBalance = prompt("how much would you like to withdraw?")
    let newBalance = balance - withdraw;
    return newBalance;
}

function deposit(balance, deposit){
usersBalance = prompt("How much would you like to deposit")
let newBalance = balance + deposit
return newBalance
}

function validatePin(){
    usersPin =prompt ("Please enter your pin")
    if(usersPin === pin){
        return true;
    }
}
module.exports.getBalance = getBalance
module.exports.withdraw = withdraw
module.exports.deposit = deposit
module.exports.validatePin = validatePin
