const  container = document.getElementById("contain");
const back = document.querySelector(".back");
back.addEventListener("click",()=>{
    window.location.replace("../game-home.html");
})
const  messages = document.querySelector(".Messages");
const listAppear= document.querySelector(".cloner");
let  chooseUserText = document.getElementById("choose-message");
let computerSide  = document.querySelector(".Computer-side");
let body  = document.getElementById("body");





//local storage values of userInput 
let UserNameSaved = localStorage.getItem("userName");
let userMaleSaved = localStorage.getItem("userMale");
let userFemaleSaved = localStorage.getItem("userFemale");






//Arrays
// Texts
let computerText = ["Hey!","My name is John. I’m from Rosewood.", `Are you detective ${UserNameSaved} ?`];
let UserText = ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?"];
let chooseText = ["Hey!","Do I know you?","Hello John!" ,`Hello John, My name is ${UserNameSaved}`,"How did you get my number?" ];






let pName = document.querySelector(".pName");
const  c0 =  document.getElementById("c0"); 
const  c1 =  document.getElementById("c1"); 
const  c2 =  document.getElementById("c2"); 
const  c3 =  document.getElementById("c3"); 
const comp0 = document.getElementById("comp0");
const comp1 = document.getElementById("comp1");
const comp2 = document.getElementById("comp2");
const john0 = document.getElementById("john0");
const john1 = document.getElementById("john1");
const john2 = document.getElementById("john2");
const o0=document.getElementById("o0");
const o1 = document.getElementById("o1");
const o2 = document.getElementById("o2");
const o3 = document.getElementById("o3");
const o4 = document.getElementById("o4");
o3.innerHTML = `Hello John, My name is ${UserNameSaved} `;
const u0 = document.getElementById("u0");
const u1 = document.getElementById("u1");
const u2 = document.getElementById("u2");
const u3 = document.getElementById("u3");
const contain0 = document.getElementById("contain0");
const contain1 = document.getElementById("contain1");
const contain2 = document.getElementById("contain2");
const contain3 = document.getElementById("contain3");
const user0 = document.getElementById("user0");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const user3 = document.getElementById("user3");
const i0 = document.getElementById("i0");
const i1 = document.getElementById("i1");
let selection = document.getElementById("popup");

const male = document.getElementById("Male");
const female = document.getElementById("Female");
const NAME = document.getElementById("NAME");
const btnStrt = document.querySelector(".start");
const control = document.querySelector(".control");
var  maleValue ;
let femaleValue ;


btnStrt.addEventListener("click",()=>{

if(NAME.value != ""){
    localStorage.setItem("userName",NAME.value);

 if(male.checked === true && female.checked ===true){
     alert("Refresh the page and choose only one gender");
 }
   else if(male.checked === true){
     localStorage.setItem("userMale",male.value);
     maleValue = "UserIsMale";

    }
else if (female.checked === true){
    localStorage.setItem("userFemale",female.value);
}    
else if(male.checked === false || female.checked === false){
    alert("choose your gender");
}
else{
    alert("re enter");
}
}

else{
    alert("Re enter your name and gender")
}

 control.style.display = "none";

})






if(c0.textContent.trim() === computerText[0].trim()){
    comp0.style.display = "flex";
selection.style.display = "block";
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
  })}


 
     
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
            comp1.style.display = "flex";
            c1.textContent = computerText[1];
            const profileImg = document.querySelector(".Profile-img");
            profileImg.style.right = "32%";
           
            pName.textContent = "JOHN";
            localStorage.setItem("nameOfChar",pName.innerHTML);
            localStorage.setItem("john0",john0.innerHTML);
            location.reload();
         
         },1000 ) 
        }
        })
    
        
 
    }
     



    if (UserNameSaved){
        if ( userMaleSaved){
    control.style.display = "none"; 
    if(o2.textContent.trim() === chooseText[2].trim()){
        o2.addEventListener("click",()=>{
            user2.style.display = "block";
            localStorage.setItem("contain2",contain2.innerHTML);
            messages.style.display ="none";
            if(u2.textContent.trim() === UserText[2].trim()){
                i1.style.display="flex";
                setTimeout(()=>{
                    i1.remove();
                    o2.remove();
                    o3.remove();
                    o5.style.display = "block";
                    o6.style.display = "block";
                    comp2.style.display = "flex";
                    c2.textContent = computerText[2];
                    localStorage.setItem("john1",john1.innerHTML);
                   
                 
                 },1000 ) 
            }              
      })
    }

    if (o3.textContent.trim() === chooseText[3].trim()){
        o3.addEventListener("click",()=>{
         u3.textContent = UserText[3];
            user3.style.display = "block";
            localStorage.setItem("contain3",contain3.innerHTML);
            messages.style.display ="none"; 
            if(u3.textContent.trim() === UserText[3].trim()){
                  listAppear.addEventListener("click", ()=>{
                    messages.style.display = "block";
                    o2.remove();
                    o3.remove();
                    o4.style.display = "block";
             
                  })
               
            }             


           
               })
           
               
        
           

        }










    }
    

    


    

      
         /* if (userFemaleSaved){
            control.style.display = "none";
            if(o2.textContent.trim() === chooseText[2].trim()){
                o2.addEventListener("click",()=>{
               alert("box");
                })
             
             }
        } */
   

    }
     

    












































 // Local storage
 let savedUser0 = localStorage.getItem("contain0");
 let savedUser1 = localStorage.getItem("contain1");
 let savedUser2 = localStorage.getItem("contain2");
 let savedUser3 = localStorage.getItem("contain3");
 let savedComp0 = localStorage.getItem("john0");
 let savedComp1 = localStorage.getItem("john1");


pName.textContent = localStorage.getItem("nameOfChar");

 
  if (savedUser0){
     contain0.innerHTML = savedUser0;
     o0.remove();
   

 } 
  if (savedUser1){
     contain1.innerHTML = savedUser1;
     o1.remove();
     o0.remove();
 }

if(savedUser2){
    contain2.innerHTML = savedUser2;
    o2.remove();
    o3.remove();
}

if(savedUser3){
    contain3.innerHTML = savedUser3;
    o2.remove();
    o3.remove();
    o4.style.display = "block";
    
}






  if (savedComp0){
      john0.innerHTML = savedComp0; 
      o2.style.display = "block";
     o3.style.display = "block"; 
/*      o3.innerHTML = "Hello John, My name is " + UserNameSaved; */
  }
  

  if (savedComp1){
    john1.innerHTML = savedComp1; 
     o5.style.display = "block";
     o6.style.display = "block";
}

