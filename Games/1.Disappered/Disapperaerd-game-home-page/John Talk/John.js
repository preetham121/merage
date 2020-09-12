const  container = document.getElementById("contain");
const back = document.querySelector(".back");
back.addEventListener("click",()=>{
    window.location.replace("../game-home.html");
})
const  messages = document.querySelector(".Messages");
const listAppear= document.querySelector(".cloner");
let  chooseUserText = document.getElementById("choose-message");
let UserTalks;
let userSide;
let computerSide  = document.querySelector(".Computer-side");
let body  = document.getElementById("body");
//Arrays
// Texts
let computerText = ["Hey!","My name is John. I’m from Rosewood.","good"];
let UserText = ["Hey!","Do I know you?"];
let chooseText = ["Hey!","Do I know you?"];

//Id's
/* let chooseID =  ["o0","o1","o2" ,"o3" ,"o4" ,"o5"];
let JohnId = ["john0","john1","john3","john4","john5"] */




//Creating functions 

/* 
let UserTextContent = () =>{
    UserSide = document.createElement("div");
    UserSide.setAttribute("class", " usersidetext");
    UserSide.setAttribute("id", "userId0 ");
    container.appendChild(UserSide);
    UserTalks = document.createElement("div");
    UserTalks.textContent = "dsfh";
   UserTalks.setAttribute("class", "text-box-user text-select");
   UserSide.appendChild(UserTalks);
    let img = document.createElement("img");
    img.setAttribute("src","./../../../../pics/images.png");
    img.setAttribute("width","100%");
    img.setAttribute("height","100%");
    UserSide.appendChild(img);
   
}
 */






let pName = document.querySelector(".pName");
const  c0 =  document.getElementById("c0"); 
const comp0 = document.getElementById("comp0");
const comp1 = document.getElementById("comp1");
const john0 = document.getElementById("john0");
const o0=document.getElementById("o0");
const o1 = document.getElementById("o1");
const u0 = document.getElementById("u0");
const contain0 = document.getElementById("contain0");
const contain1 = document.getElementById("contain1");
const user0 = document.getElementById("user0");
const user1 = document.getElementById("user1");
const i0 = document.getElementById("i0");


if(c0.textContent.trim() === computerText[0].trim()){
    comp0.style.display = "flex";
    
   listAppear.addEventListener("click",()=>{
       messages.style.display="block";    
       o0.style.display = "block";
       o1.style.display = "block";
     
    })

}

if(o0.textContent.trim() === chooseText[0].trim()){
   o0.addEventListener("click",()=>{
       user0.style.display = "block";
      localStorage.setItem("contain0",contain0.innerHTML);
        messages.style.display = "none";
       o0.remove();

   

   })
}





 if(o1.textContent.trim() === chooseText[1].trim()){
    o1.addEventListener("click",()=>{
     user1.style.display = "block";
     localStorage.setItem("contain1",contain1.innerHTML);
     if (u0.textContent === UserText[0]){
     o0.remove();
     o1.remove();
     messages.remove();
   i0.style.display="flex";
     setTimeout(()=>{
       i0.remove();
        comp1.style.display = "block";
    
        const profileImg = document.querySelector(".Profile-img");
        profileImg.style.right = "32%";
       
        pName.textContent = "JOHN";
        localStorage.setItem("nameOfChar",pName.innerHTML);
        localStorage.setItem("john0",john0.innerHTML);

     
     },1200 ) 
    }
    })

    

 } 







 // Local storage
 pName.textContent = localStorage.getItem("nameOfChar");
 let savedUser0 = localStorage.getItem("contain0");
 let savedUser1 = localStorage.getItem("contain1");
 let savedComp0 = localStorage.getItem("john0");

 if (savedUser0){
     contain0.innerHTML = savedUser0;
     o0.remove();
 } 
  if (savedUser1){
     contain1.innerHTML = savedUser1;
     o1.remove();
     o0.remove();
 }
  if (savedComp0){
      john0.innerHTML = savedComp0; 
  }
