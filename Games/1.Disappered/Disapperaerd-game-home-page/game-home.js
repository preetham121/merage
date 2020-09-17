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
const change = document.querySelector(".change");

 save = localStorage.getItem("nameOfChar");




 if(save){
  name.innerHTML = save;
  change.textContent = save;

 }


 let UserNameSaved = localStorage.getItem("userName");
 popBTN = document.getElementById("popBtn");
 const popEpi = document.querySelector(".episodePop");

popBTN.addEventListener("click",()=>{
   popEpi.remove();
})



 if(UserNameSaved){
           popEpi.remove();
 }





 // Local storage
 let savedUser0 = localStorage.getItem("contain0");
 let savedUser1 = localStorage.getItem("contain1");
 let savedUser2 = localStorage.getItem("contain2");
 let savedUser3 = localStorage.getItem("contain3");
 let savedUser4 = localStorage.getItem("contain4");
 let savedUser5 = localStorage.getItem("contain5");
 let savedUser6 = localStorage.getItem("contain6");
 let savedUser7 = localStorage.getItem("contain7");
 let savedUser8 = localStorage.getItem("contain8");
 let savedUser9 = localStorage.getItem("contain9");
 let savedUser10 = localStorage.getItem("contain10");
 let savedUser11 = localStorage.getItem("contain11");
 let savedUser12 = localStorage.getItem("contain12");
 let savedUser13 = localStorage.getItem("contain13");
 let savedUser14 = localStorage.getItem("contain14");
 let savedUser15 = localStorage.getItem("contain15");
 let savedUser16 = localStorage.getItem("contain16");
 let savedUser17 = localStorage.getItem("contain17");
 let savedUser18 = localStorage.getItem("contain18");


 let savedComp0 = localStorage.getItem("john0");
 let savedComp1 = localStorage.getItem("john1");
 let savedComp2 = localStorage.getItem("john2"); 
 let savedComp3 = localStorage.getItem("john3"); 
 let savedComp4 = localStorage.getItem("john4");
 let savedComp5 = localStorage.getItem("john5");
 let savedComp6 = localStorage.getItem("john6");
 let savedComp7 = localStorage.getItem("john7");
 let savedComp8 = localStorage.getItem("john8");
 let savedComp9 = localStorage.getItem("john9");
 let savedComp10 = localStorage.getItem("john10");
 let savedComp11 = localStorage.getItem("john11");
 let savedComp12 = localStorage.getItem("john12");
 let savedComp13 = localStorage.getItem("john13");
 let savedComp14 = localStorage.getItem("john14");
 let savedComp15 = localStorage.getItem("john15");
 let savedComp16 = localStorage.getItem("john16");

 const  userMaleSaved = localStorage.getItem("userMale");
 const userFemaleSaved = localStorage.getItem("userFemale");
 

  let femaleUserText =  ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?","Yes!","How do you know me ?",
 "I mean I was","I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
 "I quit my job.","Sorry, I’m no help to you.","I cannot help you, consult anyone else","I don’t do detective things anymore.","I quit my job.",
 " So he gave you my number. ","Look I cant do this…"];
 
 let UserText = ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?","Yes!","How do you know me ?",
 "I mean I was", "I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
 "I quit my job." ,"Sorry, I’m no help to you.","I cannot help you, consult anyone else","I don’t do detective things anymore.","I quit my job.",
 " So he gave you my number. ","Look I cant do this…"]; 
//user local 

  if (savedUser0){
           let  NumberDisplay = document.getElementById("NumberDisplay");
           let  textnumber  = document.querySelector(".text-number ");
            if (userMaleSaved){
                      NumberDisplay.textContent = UserText[0];

            }
            if(userFemaleSaved) {
              NumberDisplay.textContent = femaleUserText[0];
            }

             textnumber.style.display = "none";
 } 

  if (savedUser1){
    let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
     if (userMaleSaved){
               NumberDisplay.textContent = UserText[1];

     }
     if(userFemaleSaved) {
       NumberDisplay.textContent = femaleUserText[1];
     }

      textnumber.style.display = "none";
  

 }



 if(savedUser4){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[4];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[4];
   }

    textnumber.style.display = "none";
}


if(savedUser5){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[5];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[5];
   }

    textnumber.style.display = "none";

}



if(savedUser7){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[7];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[7];
   }

    textnumber.style.display = "none";

}

 





//computer local


if (savedComp0){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
     NumberDisplay.textContent = "You have a text from John ";
    textnumber.style.display = "block";
}






if(savedUser2){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[3];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[3];
   }

    textnumber.style.display = "none";
}

if(savedUser3){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[3];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[3];
   }

    textnumber.style.display = "none";
    
}










  if (savedComp1){
    let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}


if(savedUser5){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[5];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[5];
   }

    textnumber.style.display = "none";

}

if(savedUser6){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[6];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[6];
   }

    textnumber.style.display = "none";
}


if (savedComp2){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
     NumberDisplay.textContent = "You have a text from John ";
    textnumber.style.display = "block";
    
}


if(savedUser15){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[15];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[15];
   }

    textnumber.style.display = "none";
}
 

if(savedUser12){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[12];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[12];
   }

    textnumber.style.display = "none";
 
  }




if (savedComp3){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
     NumberDisplay.textContent = "You have a text from John ";
    textnumber.style.display = "block";
    

    
}

      


if (savedComp4){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
     NumberDisplay.textContent = "You have a text from John ";
    textnumber.style.display = "block";

}


if (savedComp5){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
     NumberDisplay.textContent = "You have a text from John ";
    textnumber.style.display = "block";

}




if(savedUser8){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[8];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[8];
   }

    textnumber.style.display = "none";


}

if(savedUser9){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[9];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[9];
   }

    textnumber.style.display = "none";

}


if(savedUser10){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[10];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[10];
   }

    textnumber.style.display = "none";
}

 if(savedUser11){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[11];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[11];
   }

    textnumber.style.display = "none";
}

if (savedComp6){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
     NumberDisplay.textContent = "You have a text from John ";
    textnumber.style.display = "block";
}


if (savedComp7){
  let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}


if (savedComp12){
  let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}



if(savedUser18){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[18];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[18];
   }

    textnumber.style.display = "none";

}



if(savedUser13){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[13];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[13];
   }

    textnumber.style.display = "none";

}


if(savedUser14){
  let  NumberDisplay = document.getElementById("NumberDisplay");
  let  textnumber  = document.querySelector(".text-number ");
   if (userMaleSaved){
             NumberDisplay.textContent = UserText[14];

   }
   if(userFemaleSaved) {
     NumberDisplay.textContent = femaleUserText[14];
   }

    textnumber.style.display = "none";

}



if (savedComp13){
  let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}


if (savedComp14){
  let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}


if (savedComp15){
  let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}


if (savedComp16){
  let  NumberDisplay = document.getElementById("NumberDisplay");
    let  textnumber  = document.querySelector(".text-number ");
       NumberDisplay.textContent = "You have a text from John ";
      textnumber.style.display = "block";
}






