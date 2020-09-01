// login page 
let userNameLogin = document.getElementById("username-login");
let passwordLogin = document.getElementById("password-login");
let goLoginBtn    = document.getElementById("go-login");
let SignupPage    = document.getElementById("SignUp");
let StorageOfUserName = localStorage.getItem("UserNameStorage");
let StorageOfPassword = localStorage.getItem("confirmPasswordStorage");


//Redirecting to Signup page
function redirectingToSignUp(){
  window.location.replace("../Disappered-login-page.html");
}
SignupPage.addEventListener("click", redirectingToSignUp);

//Accessing of localStorage values
function accessingOfLocalStorage(){
  
}
 
goLoginBtn.addEventListener("click", function(){
    if (userNameLogin.value === StorageOfUserName && passwordLogin.value === StorageOfPassword){
  alert("it works");
    }
    else{
        alert("oops");
    }
})


