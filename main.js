//Declaring global Variables
var balance=0
var deposit1=0
var withdraw1=0
var i=0
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//--------------------------------------------------------------------Main Functon--------------------------------------------------------------
function main(){
    var option=Number(document.getElementById("option").value)

    switch (option) {
        case 0:
            document.getElementById("zero").innerHTML ="*Please Choose an option to Proceed"
            break;

        case 1:
            deposit()
            break;    

        case 2:
            withdraw() 
            break;        
    
        default:
            break;
    }    
}


//-------------------------------------------------------funcion to Deposit Money to the BANK---------------------------------------------------

function deposit(){
   
    let b=Number(document.getElementById("balance").value)

     if(b>0){
         
        /* setting tabel data start*/
        var desc = document.getElementById("description").value
        var data =  document.getElementById("t1"); /* this line takes the entire tabel structure */
        var newRow = data.insertRow(++i) /* creating a new row */
        /* for newly created row adding cols that we want */
        var cel1 = newRow.insertCell(0) 
        var cel2 = newRow.insertCell(1)
        var cel3 = newRow.insertCell(2)
        var cel4 = newRow.insertCell(3)

        cel1.style.textAlign="center"
        cel1.style.color="darkgreen"
        cel2.style.textAlign="center"
        cel3.style.textAlign="center"
        cel4.style.textAlign="center"
        /* with the col reference we are assigning the value */
        /* setting tabel data end */
        balance=balance+b
        deposit1=deposit1+b
        document.getElementById("depositBalance").innerHTML=deposit1
    
        cel1.innerHTML = `+ Rs.${b}`
        cel2.innerHTML = desc;
        cel3.innerHTML = date
        cel4.innerHTML=time
        document.getElementById("totalBalance").innerHTML=balance   
        document.getElementById("balance").value=Number
        document.getElementById("description").value=" "
        document.getElementById("zero").innerHTML =" "

    }
    else{

        document.getElementById("zero").innerHTML = `*Deposit Amount must be greater than 0`
    }   
    
}



//------------------------------------------------function to Withdraw Money From the BANK---------------------------------------------------

function withdraw(){

    let b=Number(document.getElementById("balance").value)

    if(balance==0){
      //  console.log("dhdihodn")
      document.getElementById("zero").innerHTML ="*Please Deposit Something to Withdraw from the BANK"
    }
    else if(b==0){
        document.getElementById("zero").innerHTML ="*Minimum Balance for Withdrawn Should be Greater than 0"
    }
    else if(b>balance){
        document.getElementById("zero").innerHTML="*Insufficient Balance"
    }
    else{
        /* setting tabel data start*/
        var desc = document.getElementById("description").value
        var data =  document.getElementById("t1"); /* this line takes the entire tabel structure */
        var newRow = data.insertRow(++i) /* creating a new row */
        /* for newly created row adding cols that we want */
        var cel1 = newRow.insertCell(0) 
        var cel2 = newRow.insertCell(1)
        var cel3 = newRow.insertCell(2)
        var cel4 = newRow.insertCell(3)

        cel1.style.textAlign="center"
        cel1.style.color="darkred"
        cel2.style.textAlign="center"
        cel3.style.textAlign="center"
        cel4.style.textAlign="center"
        balance=balance-b
        withdraw1=withdraw1+b
        document.getElementById("withdrawBalance").innerHTML=withdraw1
        cel1.innerHTML =   `- Rs.${b}`
        cel2.innerHTML = desc;
        cel3.innerHTML = date
        cel4.innerHTML=time
        document.getElementById("totalBalance").innerHTML=this.balance   
        document.getElementById("balance").value=Number
        document.getElementById("description").value=" "
        document.getElementById("zero").innerHTML =" "

    }
   
}

//----------------------------------------------------------function for reseting the values-----------------------------------------------------

function blank(){
    document.getElementById("balance").value=Number
    document.getElementById("description").value=" "
}




//---------------------------------------------------------For Pop-Up Log in and Sign Up-------------------------------------------------------

//-------------for Log in-----------

document.getElementById('login').addEventListener("click", function() {
    document.querySelector('.popup').style.display = "flex";

});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.popup').style.display = "none";
});


function validate(){
    let username=document.getElementById('username').value
    let password=document.getElementById("password").value
   
    window.localStorage.setItem(JSON.stringify(username), JSON.stringify(password));
    console.log("bkkknnb")
}

//-------For Sign Up--------------

document.getElementById('signup').addEventListener("click", function() {
	document.querySelector('.popup2').style.display = "flex";
});

document.querySelector('.close2').addEventListener("click", function() {
	document.querySelector('.popup2').style.display = "none";
});


function validate(){
    let username=document.getElementById('username').value
    let password=document.getElementById("password").value
   
    window.localStorage.setItem(JSON.stringify(username), JSON.stringify(password));
    console.log("bkkknnb")
}