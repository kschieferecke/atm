"use strict";

      //bank account 
        //create a new ATM instance when the page loads
let accounts = [];
// let atm = new Atm(); 

//     function Atm() {
//         this.accounts = [
//              {
//                    pin : 1239,
//                     balance: 100.00
//                   }, 
//                   //1 
//                   {
//                     pin: 3209,
//                     balance: 5.00 
//                   },
//                   //2 
//                     {
//                     pin: 2345,
//                     balance: 205800.00 
//                   },
//                     {
//                     pin: 6542,
//                     balance: 163.00 
//                   },
//                   {
//                     pin: 6732,
//                     balance: 985.00 
//                   }
//             ];
            this.currentAccount = null; 
        
            this.createAccount = function (pin){
                let newAccount = new Account(pin);
                this.accounts.push(newAccount);
                this.currentAccount = newAccount; 
                return newAccount; 
            };

            this.getAccount = function (pin){
                for (let i = 0; i < this.accounts.length; i++) {
                    if (this.accounts[i].pin === pin) {
                        //return the bank account that matches our pin
                        this.currentAccount = this.accounts[i]; 
                        return this.accounts[i];
                    }
                }
                return null; 
            }; 

            //settings for this atm for the future?
            this.configuration = {};

       
        }

        function Account(pin) { 
            this.pin = pin;
            this.balance = 0;
            
            //getBalance 
            this.getBalance = function(){
                    return(this.balance); 
            }

            //withdrawal
            this.withdrawal = function(){
                //implement this 
            }

            //deposit 
            this.deposit = function(){
                //this implement this 
            }

        }

        function returnToMenu(){
            //implement this 
        }

        function displayBalance() {
            //we need a pin 
            document.getElementById("balance").innerHTML = 
           "Your Balance is: " + atm.currentAccount.balance; 
        }

        //UI side/display logic 
        function newAccount(){
                let pin = parseInt(document.getElementById("newpinput").value);
                atm.createAccount(pin);
                //display menu
                displayMenu(); 

            }

        function login() {
            let pin = parseInt(document.getElementById("pinput").value);
            //if we find a pin, do something, open a menu or whatever and exit
            //the get account function 
            atm.getAccount(pin);
            if( atm.currentAccount === null){
                //if the account doesn't, create with that pin
                alert("Invalid pin!"); 
            } else {
                displayMenu(); 
            }
            //document.getElementById("account").innerHTML = "pin: " + acct.pin + "<br>" + "balance: " + acct.balance; 
            return;
        }

        function displayMenu(){
            //display menu 
            document.getElementById("start").style.display = "none";
            document.getElementById("menu").style.display = "block";
        }

        function returnToMain() {
            document.getElementById("start").style.display = "block";
            document.getElementById("menu").style.display = "none";
    
        }