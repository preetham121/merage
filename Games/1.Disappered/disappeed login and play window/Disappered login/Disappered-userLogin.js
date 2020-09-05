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


//When login is clicked it must show control page
goLoginBtn.addEventListener("click", () =>{
  if (userNameLogin.value === StorageOfUserName && passwordLogin.value === StorageOfPassword){
    loginPage.innerHTML = " <div class='controls control'> <img src='../../../../pics/controls.jpg' width='100%' height='100%'><div class='center'> <button class='btn play-btn text-success border-success'>PLAY</button><button class='btn reset-btn text-danger border-danger'>RESET GAME</button><button class='btn exit-btn text-info border-info'>SAVE AND EXIT</button></div> </div>  </div>"
  
    // Game play Directed to home page of game
const playBtn = document.querySelector(".play-btn");//play button
const resetBtn = document.querySelector(".reset-btn");//reset button
playBtn.addEventListener("click", () =>{
  window.location.replace("../../Disapperaerd-game-home-page/game-home.html");
})
     
  }

  else if (userNameLogin.value != StorageOfUserName || passwordLogin.value != StorageOfPassword){
    alert("Incorrect password OR UserName");
  }
});


