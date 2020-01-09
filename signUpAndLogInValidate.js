var ar=[]

function checkingSignUp(){
    let signFName=document.getElementById("fName").value
    
    let signMName=document.getElementById("mName").value
    
    let signLName=document.getElementById("lName").value
    

    let signContactNo=document.getElementById("contactNo").value
    

    let signPaswd=document.getElementById("signPswd").value
   
    
    let signConfirmPaswd=document.getElementById("signConfirmPswd").value
    
    let signEmail=document.getElementById("email").value
    
    let signAccNo=document.getElementById("accNo").value
    

    for(let i=0;i<signFName.length;i++){
        if(!(signFName.charAt(i)>='A' && signFName.charAt(i)<='Z' || 
        signFName.charAt(i)>='a' && signFName.charAt(i)<='z')){
            document.getElementById("fNameMsg").innerHTML="**Can contain only alphabetic characters**"
            return false 
        }
    }
    if(signFName==""){
        document.getElementById("fNameMsg").innerHTML="**Please provide your name**"
        return false
    }
    else if (signFName.length>10){
        document.getElementById("fNameMsg").innerHTML="**Length should be maximum of 10 characters**"
        return false
    }
    
    for(let i=0;i<signMName.length;i++){
        if(!(signMName.charAt(i)>='A' && signMName.charAt(i)<='Z' ||
        signMName.charAt(i)>='a' && signMName.charAt(i)<='z')){
            document.getElementById("mNameMsg").innerHTML="**Can contain only alphabetic characters**"
            return false 
        }
    }
    if (signMName.length>10){
        document.getElementById("fNameMsg").innerHTML="**Length should be maximum of 10 characters**"
        return false
    }
    
    for(let i=0;i<signLName.length;i++){
        if(!(signLName.charAt(i)>='A' && signLName.charAt(i)<='Z' || 
        signLName.charAt(i)>='a' && signLName.charAt(i)<='z')){
            document.getElementById("lNameMsg").innerHTML="**Can contain only alphabetic characters**"
            return false 
        }
    }

        
        if(signLName==""){
            document.getElementById("lNameMsg").innerHTML="**Please provide your last name**"
            return false
        }
        else if (signLName.length>10){
            document.getElementById("lNameMsg").innerHTML="**Length should be maximum of 10 characters**"
            return false
        }
        
        if(signAccNo==""){
            document.getElementById("accNumMsg").innerHTML="**Please provide your bank Account Number**"
            return false
        }
    
        else if(signAccNo.length!=11){
            document.getElementById("accNumMsg").innerHTML="**Please provide a valid Account Number**"
            return false
    }



    if(document.getElementById("signAddress").value==""){
        document.getElementById("addressMsg").innerHTML="**Can't be empty**"
        return false
    }

    if(document.getElementById("pinCode").value==""){
        document.getElementById("pinCodeMsg").innerHTML="**Please provide your regional PIN code**"
        return false
    }
    else if(document.getElementById("pinCode").value.length!=6){
        document.getElementById("pinCodeMsg").innerHTML="**Please provide a valid PIN code**"
        return false
    }

    if(signContactNo.length==""){
        document.getElementById("conMsg").innerHTML="**Please provide the mobile number**"
        return false
    }
    else if(signContactNo.length!=10){
        document.getElementById("conMsg").innerHTML="**Please provide a valid mobile number**"
        return false
    }

    if(signEmail==""){
        document.getElementById("emailMsg").innerHTML="**Please provide your email id**"
        return false
    }

    if(signPaswd==""){
        document.getElementById("paswdMsg").innerHTML="**Please provide password**"
        return false
    }

    else if(!(signPaswd.length>=3 && signPaswd.length<=10)){
        document.getElementById("paswdMsg").innerHTML="**Length must be greater than 3 and less than 10**"
        return false
    }


    if(signConfirmPaswd!=signPaswd){
        document.getElementById("conPaswdMsg").innerHTML="**Passwords don't match**"
        return false
    }

    window.localStorage.setItem('user', JSON.stringify());

    }


document.getElementById("signUpBtn").addEventListener('click',checkingSignUp)

function checkingLogIn(){
    var logInUserName=document.getElementById("logUserName").value
    var logInPassword=document.getElementById("passWord").value

    if(logInUserName==""){
        document.getElementById("logInMsg").innerHTML="**Can't leave empty**"
        return false
    }

    if(!(logInUserName=='sumit'||logInUserName=='niloy'||logInUserName=='suresh'||logInUserName=='adil'
    ||logInUserName=="snehal")){
        document.getElementById("logInMsg").innerHTML="**Invalid user name**"
        return false
    }
    
    if(logInPassword==""){
        document.getElementById("logInPswd").innerHTML="**Can't leave empty**"
        return false
    }


    if(logInPassword!=12345){
        document.getElementById("logInPswd").innerHTML="**Invalid Password**"
        return false
    }
}

document.getElementById("logInBtn").addEventListener('click',checkingLogIn)