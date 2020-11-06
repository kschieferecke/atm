
//existing bank account 
let bankAccounts = [
  {
    pin : 1239,
    balance: 100.00
  }, 
  //1 
  {
    pin: 3209,
    balance: 5.00 
  },
  //2 
    {
    pin: 2345,
    balance: 205800.00 
  },
    {
    pin: 6542,
    balance: 163.00 
  },
  {
    pin: 6732,
    balance: 985.00 
  }
];

function getAccount(){
	let pin = parseInt(document.getElementById("pinput").value); 
  for(let i=0; i < bankAccounts.length; i++){
    if( bankAccounts[i].pin === pin  ){
    	document.getElementById("account").innerHTML = bankAccounts[i].balance; 
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
        pin: pin,
        balance: 0
    };
    for(let i=0; i < bankAccounts.length; i++){
        if( bankAccounts[i].pin === pin  ){
           alert("use different pin!");
           return;
        } 
    }
    bankAccounts.push(account);
    alert("Account Created!!");
 }