// login page 
let userNameLogin = document.getElementById("username-login");
let passwordLogin = document.getElementById("password-login");
let goLoginBtn    = document.getElementById("go-login");
let SignupPage    = document.getElementById("SignUp");
let StorageOfUserName = localStorage.getItem("UserNameStorage");
let StorageOfPassword = localStorage.getItem("confirmPasswordStorage");
let loginPage = document.querySelector(".body");


//Redirecting to Signup page
function redirectingToSignUp(){
  window.location.replace("../Disappered-login-page.html");
}

SignupPage.addEventListener("click", redirectingToSignUp);


 
goLoginBtn.addEventListener("click", () =>{
  if (userNameLogin.value === StorageOfUserName && passwordLogin.value === StorageOfPassword){
       loginPage.innerHTML = " <div class='controls control'> <img src='../../../../pics/controls.jpg' width='100%' height='100%'><div class='center'> <button class='btn text-success border-success'>PLAY</button><button class='btn text-danger border-danger'>RESET GAME</button><button class='btn text-info border-info'>SAVE AND EXIT</button></div> </div>  </div>"
      
  }
  else if (userNameLogin.value != StorageOfUserName || passwordLogin.value != StorageOfPassword){
    alert("Incorrect password OR UserName");
  }
});


