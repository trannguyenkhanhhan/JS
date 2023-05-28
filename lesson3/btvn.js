function Submit(){
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let aCong=email.indexOf("@");
    let dauCham = email.lastIndexOf(".");
    let number = Number
    if (email==""){
        alert("The Email is not left empty");
        return false;
        }else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
        alert("Incorrectly filled in the email ");
        }
    if (username==""){
         alert("The username is not left empty");
        }      
    if (password==""){  
         alert("The password is not left empty");
        }else if (password.length<8 || numer == 0  ){
         alert("password invalid")
        } 
}    

