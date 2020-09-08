const listAppear = document.querySelector(".cloner");
let messages = document.querySelector(".Messages");
let chooseMessage = document.querySelector(".choose-message"); 
let textInputs = ["Hyy", "Hello"];//UserTEXTS
let textInputsComputer = ["hello","great"];
let numbers = ["1","2","3"];


for(let i=0 ; i<=1; i++){ 
  let divContainer = document.querySelector(".container");
let divComputerSide = document.createElement("div");
divComputerSide.setAttribute("class", "Computer-side");
divContainer.appendChild(divComputerSide);
let ComputerImg = document.createElement("img");
ComputerImg.setAttribute("src","./../../../../pics/images.png");
ComputerImg.setAttribute("height", "100%");
ComputerImg.setAttribute("width", "100%");
divComputerSide.appendChild(ComputerImg);
let divTextBox = document.createElement("div");
divTextBox.setAttribute("class","text-box computer-text");
divTextBox.textContent = textInputsComputer[i];
divComputerSide.appendChild(divTextBox);
divTextBox.setAttribute("id",textInputsComputer[i]); 

/*  let textUsage = document.querySelector(".text-box-user");
textUsage.classList.remove("text-select");   */
let textSelectOfComp = document.getElementById(textInputsComputer[i]);
     textSelectOfComp.classList.add("text-select"); 
let  texts = document.querySelector(".text-select"); 
localStorage.setItem("MessageRecentCom",texts.innerHTML);  
for(let j=0 ;j<=i; j++ ){
localStorage.setItem("numbers",numbers[j]);

}
}  



//creating User side elements
let CreateUserSide = () =>{
  let divContainer = document.querySelector(".container");
 let divUserSide = document.createElement("div");
 divUserSide.setAttribute("class", "User-side");
divContainer.appendChild(divUserSide);
let divTextBox = document.createElement("div");
divTextBox.setAttribute("class","text-box-user ");
divUserSide.appendChild(divTextBox);
let UserImg = document.createElement("img");
UserImg.setAttribute("src","./../../../../pics/images.png");
UserImg.setAttribute("height", "100%");
UserImg.setAttribute("width", "100%");
divUserSide.appendChild(UserImg);
let textSelect = document.querySelector(".computer-text");
textSelect.classList.remove("text-select"); 
messages.style.display = "none";
listAppear.style.display = "flex";


};

 let cloning = () =>{ 
chooseMessage.textContent = textInputs[0];
chooseMessage.setAttribute("id", textInputs[0]);
let challn = document.getElementById(textInputs[0]);
  challn.addEventListener("click", ()=>{
    CreateUserSide();
    let textBoxUser = document.querySelector(".text-box-user");
    textBoxUser.innerHTML = textInputs[0];
   /* let textUser = document.querySelector(".text-box-user");
    textUser.classList.add("text-select");
    let  texts = document.querySelector(".text-select"); 
    localStorage.setItem("MessageRecent",texts.innerHTML);   */
  });
  for(let i =1; i<=1; i++){
    let create =  chooseMessage.cloneNode(true);
  let pre =  messages.appendChild(create);
  pre.textContent = textInputs[i];
  pre.setAttribute("id",textInputs[i]);
  challn = document.getElementById(textInputs[i]);
  challn.addEventListener("click", ()=>{
    CreateUserSide();
    let textBoxUser = document.querySelector(".text-box-user");
    textBoxUser.innerHTML = textInputs[i];
/* textUser = document.querySelector(".text-box-user");
textUser.classList.add("text-select");
 texts = document.querySelector(".text-select"); 
localStorage.setItem("MessageRecent",texts.innerHTML);  */
  });

}

 };


listAppear.addEventListener("click", () =>{
    listAppear.style.display = "none";
     messages.style.display = "block";
  cloning();
});






//creating computer side elements
 let CreateComputerSide = () =>{
  
  let divContainer = document.querySelector(".container");
  let divComputerSide = document.createElement("div");
  divComputerSide.setAttribute("class", "Computer-side");
 divContainer.appendChild(divComputerSide);
 let ComputerImg = document.createElement("img");
 ComputerImg.setAttribute("src","./../../../../pics/images.png");
 ComputerImg.setAttribute("height", "100%");
 ComputerImg.setAttribute("width", "100%");
 divComputerSide.appendChild(ComputerImg);
 divTextBox.setAttribute("class","text-box computer-text");
 divComputerSide.appendChild(divTextBox);
};


  



///getting back to homepage of game
 const back = document.querySelector(".back");
back.addEventListener("click",()=>{
    window.location.assign("./../game-home.html");
});

