"use strict";
//existing bank account 
let activeAccount;
let bankAccounts = [];


function getAccount(){
	let pin = parseInt(document.getElementById("pinput").value); 
  for(let i=0; i < bankAccounts.length; i++){
    if( bankAccounts[i].pin === pin  ){
        document.getElementById("account").innerHTML = bankAccounts[i].balance; 
        //activeAccount = i;
        displayMenu (); 
       
        return; 
    //  return bankAccounts[i]; 
    }   
  }
  alert("Invalid Pin!"); 
  return; 
}

//create a new bank account
function newAccount () {
    let pin = parseInt(document.getElementById("newPinput").value);
    let account = {
        "pin": pin,
        "balance": 0
    };
    for(let i=0; i < bankAccounts.length; i++){
        if( bankAccounts[i].pin === pin  ){
                    document.getElementById("balance").innerHTML = bankAccounts[i].balance;

           alert("use different pin!");
           return;
        } 
        } 
    bankAccounts.push(account);
    alert('Account Created');
    displayMenu (); }

     function displayMenu(){
        //display menu 
         document.getElementById("start").style.display = "none";
         document.getElementById("menu").style.display = "block";
     }

    function displayBalance() {
        //we need a pin x
        document.getElementById("balance").innerHTML = bankAccounts[i].balance;
        }
        function returnToMain() {
        document.getElementById("start").style.display = "block";
        document.getElementById("menu").style.display = "none";

    }

    function addDeposit () {
        let deposit = parseInt(document.getElementById("deposit").value);
        alert('maybe');
        bankAccounts[i].balance += deposit;

    }