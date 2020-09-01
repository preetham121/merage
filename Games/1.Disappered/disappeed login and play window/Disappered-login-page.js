// sign up page
let userName = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let goBtn = document.getElementById("go");
let signUp = document.getElementById("signup");
let login = document.getElementById("login");
let haveAnAccount = document.getElementById("account-to-login");

//Redirecting to login page
function redirect(){

 window.location.replace("./Disappered login/Disappered-userLogin.html") ;
}

//Storing username and password 
function StorageOfDetails(){
  localStorage.setItem("UserNameStorage" , userName.value);
  localStorage.setItem("confirmPasswordStorage", confirmPassword.value); 
  redirect();
}

// checking users input   
function check(){
  if (password.value != confirmPassword.value){
  alert("Password do not match.\nRetype the password"); 
redirect();

    }
  else if (password.value === confirmPassword.value){
     StorageOfDetails();
     alert("Account setup complete, Press 'OK' to continue"); 
     } 
 };
        
//validating users data
 function validate(){
    if (userName.value == "" || password.value == ""){
      alert("please enter username and password");
    }
    else if (userName.value.length<= 6){
      alert("please enter username character more than 6 characters");
    }
      
       else if (password.value.length <= 6){
        alert("please enter more than 6 characters in password");
      }
    else if (userName.value.length > 6 && password.value.length > 6 ){
      check();
      
    }
    else{
      alert("There was an error!\nPlease type your username and password more than 6 characters");
    }
  };

//click event submission
goBtn.addEventListener("click",validate);

//Redirect
haveAnAccount.addEventListener("click", redirect);


