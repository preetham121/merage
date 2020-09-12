//game home site
// back button
const back = document.querySelector(".back");
back.addEventListener("click",()=>{
    window.location.replace("./../disappeed login and play window/Disappered login/saveand exit/saveStart.html");
});

//phone part
const phone = document.querySelector(".phone");
phone.addEventListener("click", () => {
 window.location.replace("./../Disapperaerd-game-phone-page/game-phone.html");

});

let computerText = ["Hey!","My name is John. I’m from Rosewood."];
let UserText = ["Hey!","Do I know you?","Hello John!"];

 

   
let John = document.getElementById("john");
John.addEventListener("click", ()=>{
  window.location.replace("./John Talk/John.html");
})














//Local Storage

let name = document.getElementById("proName");
let textNumber = document.querySelector(".text-number");
let message = document.querySelector("#NumberDisplay");
let savedUser0 = localStorage.getItem("contain0");
let savedUser1 = localStorage.getItem("contain1");
let savedComp0 = localStorage.getItem("john0");


name.innerHTML = localStorage.getItem("nameOfChar");

  if (savedUser0){
        message.innerHTML = UserText[0];
        textNumber.style.display = "none";

  }

  if(savedUser1){
    message.innerHTML = UserText[1];
        textNumber.style.display = "none";
  }
 

 if(savedComp0){
  message.innerHTML = computerText[1];
  textNumber.style.display = "block";
 }