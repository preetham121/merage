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
    loginPage.innerHTML = " <div class='controls control'> <img src='../../../../pics/controls.jpg' width='100%' height='100%'><div class='center'> <button class='btn play-btn text-success border-success'>PLAY</button><button class='btn reset-btn text-danger border-danger' id='reset'>RESET GAME</button><button class='btn exit-btn text-info border-info'>SAVE AND EXIT</button></div> </div>  </div>"
  
    // Game play Directed to home page of game
const playBtn = document.querySelector(".play-btn");//play button
playBtn.addEventListener("click", () =>{
  window.location.replace("../../Disapperaerd-game-home-page/game-home.html");
})
const resetBtn = document.querySelector(".reset-btn");//reset button

resetBtn.addEventListener("click",()=>{
  const con =  confirm("All your progress will be reset. Are you sure you want to reset?")
  if(con === true){
    alert("your progress is been reset");
let UserNameSaved = localStorage.removeItem("userName");
let userMaleSaved = localStorage.removeItem("userMale");
let userFemaleSaved = localStorage.removeItem("userFemale");

let save = localStorage.removeItem("nameOfChar");

let savedUser0 = localStorage.removeItem("contain0");
let savedUser1 = localStorage.removeItem("contain1");
let savedUser2 = localStorage.removeItem("contain2");
let savedUser3 = localStorage.removeItem("contain3");
let savedUser4 = localStorage.removeItem("contain4");
let savedUser5 = localStorage.removeItem("contain5");
let savedUser6 = localStorage.removeItem("contain6");
let savedUser7 = localStorage.removeItem("contain7");
let savedUser8 = localStorage.removeItem("contain8");
let savedUser9 = localStorage.removeItem("contain9");
let savedUser10 = localStorage.removeItem("contain10");
let savedUser11 = localStorage.removeItem("contain11");
let savedUser12 = localStorage.removeItem("contain12");
let savedUser13 = localStorage.removeItem("contain13");
let savedUser14 = localStorage.removeItem("contain14");
let savedUser15 = localStorage.removeItem("contain15");
let savedUser16 = localStorage.removeItem("contain16");
let savedUser17 = localStorage.removeItem("contain17");
let savedUser18 = localStorage.removeItem("contain18");



let savedComp0 = localStorage.removeItem("john0");
let savedComp1 = localStorage.removeItem("john1");
let savedComp2 = localStorage.removeItem("john2"); 
let savedComp3 = localStorage.removeItem("john3"); 
let savedComp4 = localStorage.removeItem("john4");
let savedComp5 = localStorage.removeItem("john5");
let savedComp6 = localStorage.removeItem("john6");
let savedComp7 = localStorage.removeItem("john7");
let savedComp8 = localStorage.removeItem("john8");
let savedComp9 = localStorage.removeItem("john9");
let savedComp10 = localStorage.removeItem("john10");
let savedComp11 = localStorage.removeItem("john11");
let savedComp12 = localStorage.removeItem("john12");


  }
  
})

const exitbtn = document.querySelector(".exit-btn");
exitbtn.addEventListener("click",() => {
    window.location.replace("./Disappered-userLogin.html");
})
     
  }

  else if (userNameLogin.value != StorageOfUserName || passwordLogin.value != StorageOfPassword){
    alert("Incorrect password OR UserName");
  }
});


