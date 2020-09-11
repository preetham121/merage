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

let textNumber = document.querySelector(".text-number");
 function retrive(){ 
 let queer = localStorage.getItem("MessageRecent");
 let textMessage = document.querySelector(".text-message");
 textMessage.innerHTML = queer; 
 textNumber.style.display = "none";
};
 

   
let John = document.getElementById("john");
John.addEventListener("click", ()=>{
   /*  let ere = localStorage.removeItem("numbers");
  textNumber.remove(); */
  window.location.assign("./John Talk/John.html");

})

function rece (){
  
let naaam = localStorage.getItem("nameOfChar");
let name = document.querySelector(".Name");
name = naam;
}
rece();
