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


    
let John = document.getElementById("john");
John.addEventListener("click", ()=>{
  window.location.replace("./John Talk/John.html");
})


const name = document.getElementById("proName");

name.innerHTML = localStorage.getItem("nameOfChar");


