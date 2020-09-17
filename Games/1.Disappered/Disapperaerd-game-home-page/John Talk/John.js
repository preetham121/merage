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
let profileImg = document.querySelector(".Profile-img");
let view = document.querySelector(".view");
let head = document.querySelector(".head-part");
profileImg.addEventListener("click",() =>{
     view.style.display = "block";
});

view.addEventListener("click", ()=>{
    view.style.display = "none";
})


container.addEventListener("click",()=>{
    messages.style.display = "none";
    view.style.display = "none";
})


//local storage values of userInput 
let UserNameSaved = localStorage.getItem("userName");
let userMaleSaved = localStorage.getItem("userMale");
let userFemaleSaved = localStorage.getItem("userFemale");



//Arrays
// Texts
let femaleComputerText = ["Hey!","My name is John. I’m from Rosewood.", `Are you detective ${UserNameSaved} ?`,"What do you mean by “I was” ?","My friend William gave me your number.",
"He told me that you are a detective and you are best in your work.","He told that you helped him to find the culprit behind his father’s murder within a day.",
"Please don’t tell me that ..","  I want your help detective."," Please help me. ","My friend William told me that you are best in your work.",
" He told that you helped him to find the culprit behind his father’s murder within a day.","He gave me your phone number so that I can contact you.","Yes!",
"Don’t say that please.."," You are my only hope.","It’s my sister. She is gone missing for about a week.","I beg you please help me."];

let computerText = ["Hey!","My name is John. I’m from Rosewood.", `Are you detective ${UserNameSaved} ?`,"What do you mean by “I was” ?","My friend William gave me your number.",
"He told me that you are a detective and you are best in your work.", "He told that you helped him to find the culprit behind his father’s murder within a day.",
"Please don’t tell me that ..","  I want your help detective."," Please help me. ","My friend William told me that you are best in your work.",
"  He told that you helped him to find the culprit behind his father’s murder within a day.","He gave me your phone number so that I can contact you.","Yes!",
"Don’t say that please.."," You are my only hope.","It’s my sister. She is gone missing for about a week.","I beg you please help me."];

let femaleUserText =  ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?","Yes!","How do you know me ?",
"I mean I was","I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job.","Sorry, I’m no help to you.","I cannot help you, consult anyone else","I don’t do detective things anymore.","I quit my job.",
" So he gave you my number. ","Look I cant do this…"];

let UserText = ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?","Yes!","How do you know me ?",
"I mean I was", "I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job." ,"Sorry, I’m no help to you.","I cannot help you, consult anyone else","I don’t do detective things anymore.","I quit my job.",
" So he gave you my number. ","Look I cant do this…"];

let chooseText = ["Hey!","Do I know you?","Hello John!" ,`Hello John, My name is ${UserNameSaved}`,"How did you get my number ?","Yes!","How do you know me ?",
"I mean I was", "I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job.","Sorry, I’m no help to you.","I cannot help you, consult anyone else.","I don’t do detective things anymore.","I quit my job.",
" So he gave you my number.","Look I cant do this…"];

let femaleChooseText = ["Hey!","Do I know you?","Hello John!" ,`Hello John, My name is ${UserNameSaved}`,"How did you get my number ?","Yes!","How do you know me ?",
"I mean I was", "I remember him but…" ,"If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job.","Sorry, I’m no help to you.","I cannot help you, consult anyone else.","I don’t do detective things anymore.","I quit my job.",
' So he gave you my number.',"Look I cant do this…"];


let convo = document.querySelector(".Old-messages");


const input = document.querySelector(".input");
let pName = document.querySelector(".pName");

const  c0 =  document.getElementById("c0"); 
const  c1 =  document.getElementById("c1"); 
const  c2 =  document.getElementById("c2"); 
const  c3 =  document.getElementById("c3"); 
const  c4 =  document.getElementById("c4"); 
const  c5 =  document.getElementById("c5");
const  c6 =  document.getElementById("c6"); 
const  c7 =  document.getElementById("c7"); 
const  c8 =  document.getElementById("c8"); 
const  c9 =  document.getElementById("c9"); 
const  c10 =  document.getElementById("c10");
const  c11 =  document.getElementById("c11");
const  c12 =  document.getElementById("c12"); 
const  c13 =  document.getElementById("c13"); 
const  c14 =  document.getElementById("c14"); 
const  c15 =  document.getElementById("c15"); 
const  c16 =  document.getElementById("c16");
const  c17 =  document.getElementById("c17");

const comp0 = document.getElementById("comp0");
const comp1 = document.getElementById("comp1");
const comp2 = document.getElementById("comp2");
const comp3 = document.getElementById("comp3");
const comp4 = document.getElementById("comp4");
const comp5 = document.getElementById("comp5");
const comp6 = document.getElementById("comp6");
const comp7 = document.getElementById("comp7");
const comp8 = document.getElementById("comp8");
const comp9 = document.getElementById("comp9");
const comp10 = document.getElementById("comp10");
const comp11 = document.getElementById("comp11");
const comp12 = document.getElementById("comp12");
const comp13 = document.getElementById("comp13");
const comp14 = document.getElementById("comp14");
const comp15 = document.getElementById("comp15");
const comp16 = document.getElementById("comp16");
const comp17 = document.getElementById("comp17");

const john0 = document.getElementById("john0");
const john1 = document.getElementById("john1");
const john2 = document.getElementById("john2");
const john3 = document.getElementById("john3");
const john4 = document.getElementById("john4");
const john5 = document.getElementById("john5");
const john6 = document.getElementById("john6");
const john7 = document.getElementById("john7");
const john8 = document.getElementById("john8");
const john9 = document.getElementById("john9");
const john10 = document.getElementById("john10");
const john11 = document.getElementById("john11");
const john12 = document.getElementById("john12");
const john13 = document.getElementById("john13");
const john14 = document.getElementById("john14");
const john15 = document.getElementById("john15");
const john16 = document.getElementById("john16");

const o0=document.getElementById("o0");
const o1 = document.getElementById("o1");
const o2 = document.getElementById("o2");
const o3 = document.getElementById("o3");
o3.innerHTML = `Hello John, My name is ${UserNameSaved} `;
const o4 = document.getElementById("o4");
const o5 = document.getElementById("o5");
const o6 = document.getElementById("o6");
const o7 = document.getElementById("o7");
const o8 = document.getElementById("o8");
const o9 = document.getElementById("o9");
const o10 = document.getElementById("o10");
const o11= document.getElementById("o11");
const o12= document.getElementById("o12");
const o13= document.getElementById("o13");
const o14= document.getElementById("o14");
const o15= document.getElementById("o15");
const o16= document.getElementById("o16");
const o17= document.getElementById("o17");
const o18= document.getElementById("o18");
const o19= document.getElementById("o19");
const o20= document.getElementById("o20");

const u0 = document.getElementById("u0");
const u1 = document.getElementById("u1");
const u2 = document.getElementById("u2");
const u3 = document.getElementById("u3");
const u4 = document.getElementById("u4");
const u5 = document.getElementById("u5");
const u6 = document.getElementById("u6");
const u7 = document.getElementById("u7");
const u8 = document.getElementById("u8");
const u9 = document.getElementById("u9");
const u10 = document.getElementById("u10");
const u11 = document.getElementById("u11");
const u12 = document.getElementById("u12");
const u13 = document.getElementById("u13");
const u14 = document.getElementById("u14");
const u15 = document.getElementById("u15");
const u16 = document.getElementById("u16");
const u17 = document.getElementById("u17");
const u18 = document.getElementById("u18");
const u19= document.getElementById("u19");
const u20= document.getElementById("u20");

const contain0 = document.getElementById("contain0");
const contain1 = document.getElementById("contain1");
const contain2 = document.getElementById("contain2");
const contain3 = document.getElementById("contain3");
const contain4 = document.getElementById("contain4");
const contain5 = document.getElementById("contain5");
const contain6 = document.getElementById("contain6");
const contain7 = document.getElementById("contain7");
const contain8 = document.getElementById("contain8");
const contain9 = document.getElementById("contain9");
const contain10 = document.getElementById("contain10");
const contain11 = document.getElementById("contain11");
const contain12 = document.getElementById("contain12");
const contain13 = document.getElementById("contain13");
const contain14 = document.getElementById("contain14");
const contain15 = document.getElementById("contain15");
const contain16 = document.getElementById("contain16");
const contain17 = document.getElementById("contain17");
const contain18 = document.getElementById("contain18");
const contain19= document.getElementById("contain19");
const contain20= document.getElementById("contain20");


const user0 = document.getElementById("user0");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const user3 = document.getElementById("user3");
const user4 = document.getElementById("user4");
const user5 = document.getElementById("user5");
const user6 = document.getElementById("user6");
const user7 = document.getElementById("user7");
const user8 = document.getElementById("user8");
const user9 = document.getElementById("user9");
const user10 = document.getElementById("user10");
const user11 = document.getElementById("user11");
const user12 = document.getElementById("user12");
const user13 = document.getElementById("user13");
const user14 = document.getElementById("user14");
const user15 = document.getElementById("user15");
const user16 = document.getElementById("user16");
const user17 = document.getElementById("user17");
const user18 = document.getElementById("user18");
const user19= document.getElementById("user19");
const user20= document.getElementById("user20");


const i0 = document.getElementById("i0");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");
const i6 = document.getElementById("i6");
const i7 = document.getElementById("i7");
const i8 = document.getElementById("i8");
const i9 = document.getElementById("i9");
const i10 = document.getElementById("i10");
const i11 = document.getElementById("i11");
const i12 = document.getElementById("i12");
const i13 = document.getElementById("i13");
const i14 = document.getElementById("i14");
const i15 = document.getElementById("i15");
const i16 = document.getElementById("i16");






let selection = document.getElementById("popup");
const male = document.getElementById("Male");
const female = document.getElementById("Female");
const NAME = document.getElementById("NAME");
const btnStrt = document.querySelector(".start");
const control = document.querySelector(".control");




btnStrt.addEventListener("click",()=>{

if(NAME.value != ""){
    localStorage.setItem("userName",NAME.value);

 if(male.checked === true && female.checked ===true){
     alert("Refresh the page and choose only one gender");
     location.reload();
 }
   else if(male.checked === true){
     localStorage.setItem("userMale",male.value);
      location.reload();

    }
else if (female.checked === true){
    localStorage.setItem("userFemale",female.value);
    location.reload();
}    
else if(male.checked === false || female.checked === false){
    alert("choose your gender");
    location.reload();
}
else{
    alert("re enter");
    location.reload();
}
}

else{
    alert("Re enter your name and gender")
    location.reload();
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






    if (UserNameSaved){
        if ( userMaleSaved){
    control.style.display = "none"; 
    if(o0.textContent.trim() === chooseText[0].trim()){
        let image = document.createElement("img");
        image.setAttribute("src","./../../../../pics/john1.jpg");
        image.setAttribute("width","100%");
        image.setAttribute("height","100%");
        user0.appendChild(image);
        o0.addEventListener("click",()=>{   
            user0.style.display = "flex";
           localStorage.setItem("contain0",contain0.innerHTML);
             messages.style.display = "none";
            o0.remove();
      })}
    
    
     
         
        if(o1.textContent.trim() === chooseText[1].trim()){
            let image = document.createElement("img");
            image.setAttribute("src","./../../../../pics/john1.jpg");
            image.setAttribute("width","100%");
            image.setAttribute("height","100%");
            user1.appendChild(image);
            o1.addEventListener("click",()=>{
               
             user1.style.display = "flex";
             localStorage.setItem("contain1",contain1.innerHTML);
             if (u0.textContent === UserText[0]){
             o0.remove();
             o1.remove();
             messages.remove();
           i0.style.display="flex";
             setTimeout(()=>{
                let audio = new Audio("../../../../audio/Mouse_Click_-_Free_Sound_Effect(128k).mp3");   
                audio.play(); 
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
         
    
    if(o2.textContent.trim() === chooseText[2].trim()){
        let image = document.createElement("img");
        image.setAttribute("src","./../../../../pics/john1.jpg");
        image.setAttribute("width","100%");
        image.setAttribute("height","100%");
        user2.appendChild(image);
        o2.addEventListener("click",()=>{
         
            user2.style.display = "flex";
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
        let image = document.createElement("img");
        image.setAttribute("src","./../../../../pics/john1.jpg");
        image.setAttribute("width","100%");
        image.setAttribute("height","100%");
        user3.appendChild(image);
        o3.addEventListener("click",()=>{
            
         u3.textContent = UserText[3];
            user3.style.display = "flex";
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



   if (o4.textContent.trim() === chooseText[4].trim()){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user4.appendChild(image);
       o4.addEventListener("click",()=>{
        
           u4.textContent  = UserText[4];
           user4.style.display = "flex";
           localStorage.setItem("contain4", contain4.innerHTML);
           messages.style.display = "none";
           if(u4.textContent.trim() === UserText[4].trim()){
               o4.remove();
               i2.style.display="flex";
               setTimeout(()=>{
                i2.remove();
                comp4.style.display = "flex";
                c4.textContent = computerText[4];
                localStorage.setItem("john3",john3.innerHTML);
                setTimeout(()=>{i3.style.display = "flex"; },1000)

             },1000 ) 
          
             setTimeout(()=>{
                
                convo.style.display = "block";
               comp0.style.display = "none";
                contain0.style.display = "none";
                convo.addEventListener("click",()=>{
                    comp0.style.display = "flex";
                    contain0.style.display = "block";
                })
                i3.remove();
                comp5.style.display = "flex";
                c5.textContent = computerText[5];
                localStorage.setItem("john4",john4.innerHTML);
                setTimeout(()=>{i4.style.display = "flex";},1000)
            },4000)  

            setTimeout(()=>{
                comp0.style.display = "none";
                contain0.style.display = "none";
                contain1.style.display = "none";
                convo.addEventListener("click",()=>{
                    comp0.style.display = "flex";
                    contain0.style.display = "block";
                    contain1.style.display = "block";
                })
                i4.remove();
                o8.style.display = "block";
                o8.textContent = chooseText[8];
                comp6.style.display = "flex";
                c6.textContent = computerText[6];
                localStorage.setItem("john5",john5.innerHTML);

            },8000)  


           }
       })

   }


   if(o5.textContent.trim() ===  chooseText[5].trim()){
       u5.textContent = UserText[5];
       let image = document.createElement("img");
       image.setAttribute("src","./../../../../pics/john1.jpg");
       image.setAttribute("width","100%");
       image.setAttribute("height","100%");
       user5.appendChild(image);
       o5.addEventListener("click",()=>{
         
           user5.style.display = "flex";
           o5.remove();
           o6.remove();
           messages.style.display = "none";
           o7.style.display = "block";
           localStorage.setItem("contain5",contain5.innerHTML);

       })
   }



   if(o6.textContent.trim() === chooseText[6].trim()){
       u6.textContent = UserText[6];
       let image = document.createElement("img");
       image.setAttribute("src","./../../../../pics/john1.jpg");
       image.setAttribute("width","100%");
       image.setAttribute("height","100%");
     user6.appendChild(image);
       o6.addEventListener("click",()=>{
     
        user6.style.display = "flex";
        localStorage.setItem("contain6", contain6.innerHTML);
        messages.style.display = "none";
        if(u6.textContent.trim() === UserText[6].trim()){
            o6.remove();
            o5.remove();
            i2.style.display="flex";
            setTimeout(()=>{
           
             i2.remove();
             comp4.style.display = "flex";
            computerText[4] = "My friend William told me about you."
             c4.textContent = computerText[4];
             localStorage.setItem("john3",john3.innerHTML);
             setTimeout(()=>{i3.style.display = "flex";},1000)

          },1000 ) 
       
          setTimeout(()=>{
     
            convo.style.display = "block";
            comp0.style.display = "none";
            contain0.style.display = "none";
            convo.addEventListener("click",()=>{
                comp0.style.display = "flex";
                contain0.style.display = "block";
            })
             i3.remove();
             computerText[5] = "He told that you helped him to find the culprit behind his father’s murder."
             comp5.style.display = "flex";
             c5.textContent = computerText[5];
             localStorage.setItem("john4",john4.innerHTML);
             setTimeout(()=>{i4.style.display = "flex";},1000)
         },4000)  

         setTimeout(()=>{
           
            contain1.style.display = "none";
            convo.addEventListener("click",()=>{
                contain1.style.display = "block";
            })
             i4.remove();
              o8.style.display = "block";
              o8.textContent = chooseText[8];
             computerText[6] = "He gave me your phone number so that I can contact you."
             comp6.style.display = "flex";
             c6.textContent = computerText[6];
             localStorage.setItem("john5",john5.innerHTML);

         },8000)  
        }
       })


   }



if(o7.textContent.trim() === chooseText[7].trim()){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user7.appendChild(image);
    o7.addEventListener("click",()=>{
        u7.textContent  = UserText[7];
        user7.style.display = "flex";
        localStorage.setItem("contain7", contain7.innerHTML);
        messages.style.display = "none";
        if(u7.textContent.trim() === UserText[7].trim()){
            o7.remove();
            i2.style.display="flex";
            setTimeout(()=>{
                convo.style.display = "block";
                comp0.style.display = "none";
                convo.addEventListener("click",()=>{
                    comp0.style.display = "flex";
                })
             i2.remove();
             o15.style.display = "block"; 
             comp3.style.display = "flex";
             c3.textContent = computerText[3];
             localStorage.setItem("john2",john2.innerHTML);

          },1000 ) 
         
   
        }
    })
}



 if (o8.textContent.trim() === chooseText[8].trim()){
    let image = document.createElement("img");
       u8.textContent = UserText[8];
       image.setAttribute("src","./../../../../pics/john1.jpg");
       image.setAttribute("width","100%");
       image.setAttribute("height","100%");
       user8.appendChild(image);

         o8.addEventListener("click",() =>{

            comp0.style.display = "none";
            john0.style.display = "none";
            contain0.style.display = "none";
            contain1.style.display = "none";
            convo.addEventListener("click",()=>{
                comp0.style.display = "flex";
                john0.style.display = "block";
                contain0.style.display = "block";
                contain1.style.display = "block";
            })
              messages.style.display = "none";
              o8.remove();
              o9.style.display = "block";
              user8.style.display = "flex";
              localStorage.setItem("contain8",contain8.innerHTML);
         })
 }

 if (o9.textContent.trim() === chooseText[9].trim()){
    u9.textContent  = UserText[9];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user9.appendChild(image);
       o9.addEventListener("click",()=>{

        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        contain3.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
            contain3.style.display = "block";
        })
        user9.style.display = "flex";
        localStorage.setItem("contain9",contain9.innerHTML);
        messages.style.display ="none"; 
        o9.remove();
        if(u9.textContent.trim() === UserText[9].trim()){
            listAppear.addEventListener("click", ()=>{
              messages.style.display = "block";
              o10.style.display = "block";
              o11.style.display = "block";
            })
         
      }     

            
       })
 }



 if (o10.textContent.trim() === chooseText[10].trim() ){
    u10.textContent = UserText[10];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user10.appendChild(image);
     o10.addEventListener("click",()=>{
      
        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        contain3.style.display = "none";
        contain4.style.display = "none";
        contain2.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
            contain3.style.display = "block";
            contain2.style.display = "block";
            contain4.style.display = "block";
        })
        o10.remove();
         o11.remove();
      user10.style.display = "flex";
        localStorage.setItem("contain10",contain10.innerHTML);
        messages.style.display ="none"; 
        if(u10.textContent.trim() === UserText[10].trim()){
            listAppear.addEventListener("click", ()=>{
              messages.style.display = "block";
              o11.remove();
              o12.style.display = "block";
            })
         
      }     



     })

 }


 

 if (o11.textContent.trim() === chooseText[11].trim() ){
    u11.textContent = UserText[11];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user11.appendChild(image);
     o11.addEventListener("click",()=>{

        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        contain2.style.display = "none";
        contain3.style.display = "none";
        contain4.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
            contain2.style.display = "block";
            contain3.style.display = "block";
            contain4.style.display = "block";
        })
        o10.remove();
         o11.remove();
      user11.style.display = "flex";
        localStorage.setItem("contain11",contain11.innerHTML);
        messages.style.display ="none"; 
        if(u11.textContent.trim() === UserText[11].trim()){
            listAppear.addEventListener("click", ()=>{
              messages.style.display = "block";
              o12.style.display = "block";
            })
         
      }     



     })

 }


 
 
 if (o12.textContent.trim() === femaleChooseText[12].trim() ){
    u12.textContent = femaleUserText[12];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user12.appendChild(image);
     o12.addEventListener("click",()=>{
       
        john3.style.display = "none";
        john4.style.display = "none";
        convo.addEventListener("click",()=>{
            john3.style.display = "block";
            john4.style.display = "block";
            
        })
       o12.remove();
      user12.style.display = "flex";
        localStorage.setItem("contain12",contain12.innerHTML);
        messages.style.display ="none"; 
        if(u12.textContent.trim() === femaleUserText[12].trim()){
            o12.remove();
            i6.style.display="flex";
            c7.textContent = femaleComputerText[7];
            c8.textContent = femaleComputerText[8];
            setTimeout(()=>{
             
                contain1.style.display = "none";
                john1.style.display = "none";
                convo.addEventListener("click",()=>{
                    contain1.style.display = "block";
                    john1.style.display = "block";
                    
                })
             i6.remove();
             comp7.style.display = "flex";
             localStorage.setItem("john6",john6.innerHTML);
             setTimeout(()=>{i7.style.display = "flex";},1000)

          },1000 ) 

          setTimeout(()=>{
         
            john0.style.display = "none";
            convo.addEventListener("click",()=>{
            john0.style.display = "block";
           })
            i7.remove();
            o13.style.display = "block";
            o14.style.display = "block";
            comp8.style.display = "flex";
            localStorage.setItem("john7",john7.innerHTML);
        },4000)  



        }

            
         
        



     })

 }


 if (o15.textContent.trim() === chooseText[15].trim() ){
    u15.textContent = UserText[15];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user15.appendChild(image);
     o15.addEventListener("click",()=>{
      john3.style.display = "none";
        john4.style.display = "none"; 
       convo.addEventListener("click",()=>{
            john3.style.display = "block";
            john4.style.display = "block";
            
        }) 
       o15.remove();
       user15.style.display = "flex";
        localStorage.setItem("contain15",contain15.innerHTML);
        messages.style.display ="none"; 
        contain0.style.display = "none";
        convo.addEventListener("click",()=>{
          contain0.style.display = "block";
        })
        if(u15.textContent.trim() === UserText[15].trim()){
            listAppear.addEventListener("click", ()=>{
                messages.style.display = "block";
                o15.remove();
                o16.style.display = "block";
              })
     
        }

            
         
        



     })

 }




if(o16.textContent.trim() === chooseText[16].trim() ){
    u16.textContent = UserText[16];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user16.appendChild(image);
    o16.addEventListener("click",()=>{
        contain1.style.display = "none";
        convo.addEventListener("click",()=>{
            contain1.style.display = "block";
        })
        o16.remove();
        user16.style.display = "flex";
        localStorage.setItem("contain16",contain16.innerHTML);
        messages.style.display ="none";

        if(u16.textContent.trim() === UserText[16].trim()){
              messages.style.display = "block";
              o16.remove();
              i6.style.display="flex";
            c7.textContent = femaleComputerText[7];
            c8.textContent = femaleComputerText[8];
            c9.textContent = computerText[9];
            c10.textContent = computerText[10];
            c11.textContent = computerText[11];
            c12.textContent = computerText[12];
            setTimeout(()=>{
             
                contain1.style.display = "none";
                john1.style.display = "none";
                convo.addEventListener("click",()=>{
                    contain1.style.display = "block";
                    john1.style.display = "block";
                    
                })
             i6.remove();
             comp7.style.display = "flex";
             localStorage.setItem("john6",john6.innerHTML);
             setTimeout(()=>{i7.style.display = "flex";},1000)

          },1000 ) 

          setTimeout(()=>{
         
            john0.style.display = "none";
            contain2.style.display = "none";
            convo.addEventListener("click",()=>{
            john0.style.display = "block";
            contain2.style.display = "none";
           })
            i7.remove();
            comp8.style.display = "flex";
            localStorage.setItem("john7",john7.innerHTML);
            setTimeout(()=>{i8.style.display = "flex";},1000)
        },4000)  
            
        setTimeout(()=>{
         
            contain5.style.display = "none";
            convo.addEventListener("click",()=>{
            contain5.style.display = "block";
           })
            i8.remove();
            comp9.style.display = "flex";
            localStorage.setItem("john8",john8.innerHTML);
            setTimeout(()=>{i9.style.display = "flex";},1000)
        },6000)  

        setTimeout(()=>{
         
            contain7.style.display = "none";
            convo.addEventListener("click",()=>{
            contain7.style.display = "block";
           })
            i9.remove();
            comp10.style.display = "flex";
            localStorage.setItem("john9",john9.innerHTML);
            setTimeout(()=>{i10.style.display = "flex";},1000)
        },8000)   

        setTimeout(()=>{
         
            contain3.style.display = "none";
            john2.style.display = "none";
            convo.addEventListener("click",()=>{
            contain3.style.display = "block";
            john2.style.display = "block";
           })
            i10.remove();
            comp11.style.display = "flex";
            localStorage.setItem("john10",john10.innerHTML);
            setTimeout(()=>{i11.style.display = "flex";},1000)
        },12000)   

        setTimeout(()=>{
         
            contain15.style.display = "none";
            convo.addEventListener("click",()=>{
            contain15.style.display = "block";
           })
            i11.remove();
            o17.style.display = "block";
            comp12.style.display = "flex";
            localStorage.setItem("john11",john11.innerHTML);

        },15000)  

         
      }   

    
    })
}
 
if(o17.textContent.trim() === chooseText[17].trim()){
 
     let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user17.appendChild(image);
    u17.textContent  = UserText[17];
    o17.addEventListener("click",()=>{
      contain16.style.display = "none";
        convo.addEventListener("click",()=>{
            contain16.style.display = "block";
        })
        user17.style.display = "flex";
        localStorage.setItem("contain17", contain17.innerHTML);
        messages.style.display = "none";
        if(u17.textContent.trim() === UserText[17].trim()){
            o17.remove();
            i12.style.display="flex";
            setTimeout(()=>{

                john0.style.display = "none";
                convo.addEventListener("click",()=>{
                    john0.style.display = "block";
                })
             i12.remove();
             o18.textContent = chooseText[18];
             o18.style.display = "block"; 
             comp13.style.display = "flex";
             c13.textContent = computerText[13];
             localStorage.setItem("john12",john12.innerHTML);

          },1000 ) 



        } 
}) 



    }



if(o18.textContent.trim() === chooseText[18].trim()){
    console.log("dfg")
           u18.textContent = UserText[18];

          let image = document.createElement("img");
          image.setAttribute("src","./../../../../pics/john1.jpg");
          image.setAttribute("width","100%");
          image.setAttribute("height","100%");
          user18.appendChild(image);
          o18.addEventListener("click",()=>{
              o18.remove();
            user18.style.display = "flex";
            messages.style.display = "none";
            john6.style.display = "none";
            john7.style.display = "none";
            convo.addEventListener("click",()=>{
                john6.style.display = "block";
                john7.style.display = "block";
            })
            localStorage.setItem("contain18", contain18.innerHTML);
            if(u18.textContent.trim() === UserText[18].trim()){
                listAppear.addEventListener("click",()=>{
                    o13.style.display = "block";
                    o14.style.display = "block";
                })
            }

          }) 
}




if(o13.textContent.trim() === chooseText[13].trim()){
          u13.textContent = UserText[13];
          let image = document.createElement("img");
          image.setAttribute("src","./../../../../pics/john1.jpg");
          image.setAttribute("width","100%");
          image.setAttribute("height","100%");
          user13.appendChild(image);
          o13.addEventListener("click",()=>{
                o13.remove();
                o14.remove();
                o17.remove();
                o18.remove();
                user13.style.display = "flex";
                messages.style.display = "none";
                localStorage.setItem("contain13",contain13.innerHTML);
                  john8.style.display = "none";
                  john5.style.display = "none";
                  convo.addEventListener("click",()=>{
                      john8.style.display = "block";
                      john5.style.display = "block";
                  })
                  if(u13.textContent.trim() ===  UserText[13].trim()){
                       john9.style.display = "none";
                       contain8.style.display = "none"  ;
                       convo.addEventListener("click",()=>{
                           john9.style.display = "block";
                           contain8.style.display = "block";
                       })
                       i13.style.display = "flex";
                    c14.textContent = computerText[14];
                    c15.textContent = computerText[15];
                    c16.textContent = computerText[16];
                    c17.textContent = computerText[17];
                    setTimeout(()=>{
                     i13.remove();
                 comp14.style.display = "flex";
                 localStorage.setItem("john13",john13.innerHTML);
             setTimeout(()=>{i14.style.display = "flex";  john10.style.display = "none"  ;  contain9.style.display = "none" ;},1000) 

                    },1000)


                    setTimeout(()=>{
                        convo.addEventListener("click",()=>{john10.style.display = "block";  contain9.style.display = "block";})

                        i14.remove();
                        comp15.style.display = "flex";
                        localStorage.setItem("john14",john14.innerHTML);
                        setTimeout(()=>{i15.style.display = "flex";  },1000);

                  },4000)


                  setTimeout(()=>{
         
                    i15.remove();
                    comp16.style.display = "flex";
                    localStorage.setItem("john15",john15.innerHTML);
                    setTimeout(()=>{i16.style.display = "flex"; john11.style.display = "none" ;    contain6.style.display = "none"; contain11.style.display = "none";  contain10.style.display = "none"},1000);
              },8000)

            
              setTimeout(()=>{
                convo.addEventListener("click",()=>{john11.style.display = "block";    contain6.style.display = "block"; contain11.style.display = "block";  contain10.style.display = "block"})
                i16.remove();
                comp17.style.display = "flex";
                localStorage.setItem("john16",john16.innerHTML);
                o19.style.display = "block";
                o20.style.display = "block";
          },10000)
              



                  
            }           

          })
}




if(o14.textContent.trim() === chooseText[14].trim()){
    u14.textContent = UserText[14];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/john1.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user14.appendChild(image);
    o14.addEventListener("click",()=>{
          o13.remove();
          o14.remove();
          o17.remove();
          o18.remove();
          user14.style.display = "flex";
          messages.style.display = "none";
          localStorage.setItem("contain14",contain14.innerHTML);
            john8.style.display = "none";
            john5.style.display = "none";
            convo.addEventListener("click",()=>{
                john8.style.display = "block";
                john5.style.display = "block";
            })
            if(u14.textContent.trim() ===  UserText[14].trim()){
                john9.style.display = "none";
                contain8.style.display = "none"  ;
                convo.addEventListener("click",()=>{
                    john9.style.display = "block";
                    contain8.style.display = "block";
                })
                 i13.style.display = "flex";
              c14.textContent = computerText[14];
              c15.textContent = computerText[15];
              c16.textContent = computerText[16];
              c17.textContent = computerText[17];
              setTimeout(()=>{
               i13.remove();
           comp14.style.display = "flex";
           localStorage.setItem("john13",john13.innerHTML);
       setTimeout(()=>{i14.style.display = "flex";   john10.style.display = "none"  ;  contain9.style.display = "none" ;},1000) 

              },1000)


              setTimeout(()=>{
                  convo.addEventListener("click",()=>{john10.style.display = "block";  contain9.style.display = "block";})
                  i14.remove();
                  comp15.style.display = "flex";
                  localStorage.setItem("john14",john14.innerHTML);
                  setTimeout(()=>{i15.style.display = "flex";  },1000);

            },4000)


            setTimeout(()=>{
   
              i15.remove();
              comp16.style.display = "flex";
              localStorage.setItem("john15",john15.innerHTML);
              setTimeout(()=>{i16.style.display = "flex";john11.style.display = "none" ;    contain6.style.display = "none";  contain11.style.display = "none";   contain10.style.display = "none"},1000);
        },8000)

      
        setTimeout(()=>{
          convo.addEventListener("click",()=>{john11.style.display = "block";    contain6.style.display = "block";  contain11.style.display = "block";   contain10.style.display = "block"})
          i16.remove();
          comp17.style.display = "flex";
          localStorage.setItem("john16",john16.innerHTML);
          o19.style.display = "block";
          o20.style.display = "block";
    },10000)
        



            
      }           

    })
}













 
    
}


      
          if (userFemaleSaved){

            control.style.display = "none";


            if(o0.textContent.trim() === chooseText[0].trim()){
                let image = document.createElement("img");
                image.setAttribute("src","./../../../../pics/femlae.jpg");
                image.setAttribute("width","100%");
                image.setAttribute("height","100%");
                user0.appendChild(image);
                o0.addEventListener("click",()=>{
                    user0.style.display = "flex";
                   localStorage.setItem("contain0",contain0.innerHTML);
                     messages.style.display = "none";
                    o0.remove();
              })}
            
            
                 
                if(o1.textContent.trim() === femaleChooseText[1].trim()){
                    let image = document.createElement("img");
                    image.setAttribute("src","./../../../../pics/femlae.jpg");
                    image.setAttribute("width","100%");
                    image.setAttribute("height","100%");
                    user1.appendChild(image);
                    o1.addEventListener("click",()=>{
                     user1.style.display = "flex";
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
                 
            
            if(o2.textContent.trim() === femaleChooseText[2].trim()){
                let image = document.createElement("img");
                image.setAttribute("src","./../../../../pics/femlae.jpg");
                image.setAttribute("width","100%");
                image.setAttribute("height","100%");
                user2.appendChild(image);
                o2.addEventListener("click",()=>{
                    user2.style.display = "flex";
                    localStorage.setItem("contain2",contain2.innerHTML);
                    messages.style.display ="none";
                    if(u2.textContent.trim() === femaleUserText[2].trim()){
                        i1.style.display="flex";
                        setTimeout(()=>{
                            i1.remove();
                            o2.remove();
                            o3.remove();
                            o5.style.display = "block";
                            o6.style.display = "block";
                            comp2.style.display = "flex";
                            c2.textContent = femaleComputerText[2];
                            localStorage.setItem("john1",john1.innerHTML);
                           
                         },1000 ) 
                    }              
              })



         
            }
       
       
            if (o3.textContent.trim() === femaleChooseText[3].trim()){
                let image = document.createElement("img");
                image.setAttribute("src","./../../../../pics/femlae.jpg");
                image.setAttribute("width","100%");
                image.setAttribute("height","100%");
                user3.appendChild(image);
                o3.addEventListener("click",()=>{
    
                 u3.textContent = femaleUserText[3];
                    user3.style.display = "flex";
                    localStorage.setItem("contain3",contain3.innerHTML);
                    messages.style.display ="none"; 
                    if(u3.textContent.trim() === femaleUserText[3].trim()){
                          listAppear.addEventListener("click", ()=>{
                            messages.style.display = "block";
                            o2.remove();
                            o3.remove();
                            o4.style.display = "block";
                     
                          })
                       
                    }             
        
        
                   
                       })
                   
                       
                
                   
        
                }
        
       
                if (o4.textContent.trim() === femaleChooseText[4].trim()){
                    let image = document.createElement("img");
                    image.setAttribute("src","./../../../../pics/femlae.jpg");
                    image.setAttribute("width","100%");
                    image.setAttribute("height","100%");
                    user4.appendChild(image);
                    o4.addEventListener("click",()=>{
                        u4.textContent  = femaleUserText[4];
                        user4.style.display = "flex";
                        localStorage.setItem("contain4", contain4.innerHTML);
                        messages.style.display = "none";
                        if(u4.textContent.trim() === femaleUserText[4].trim()){
                            o4.remove();
                            i2.style.display="flex";
                            setTimeout(()=>{
                             i2.remove();
                             comp4.style.display = "flex";
                             c4.textContent = femaleComputerText[4];
                             localStorage.setItem("john3",john3.innerHTML);
                             setTimeout(()=>{i3.style.display = "flex";},1000)
             
                          },1000 ) 
                       
                          setTimeout(()=>{
                          
                            convo.style.display = "block";
                            comp0.style.display = "none";
                            contain0.style.display = "none";
                            convo.addEventListener("click",()=>{
                                comp0.style.display = "flex";
                                contain0.style.display = "block";
                            })
                             i3.remove();
                             comp5.style.display = "flex";
                             c5.textContent = femaleComputerText[5];
                             localStorage.setItem("john4",john4.innerHTML);
                             setTimeout(()=>{i4.style.display = "flex";},1000)
                         },4000)  
             
                         setTimeout(()=>{
                        
                            comp0.style.display = "none";
                            contain0.style.display = "none";
                            contain1.style.display = "none";
                            convo.addEventListener("click",()=>{
                                comp0.style.display = "flex";
                                contain0.style.display = "block";
                                contain1.style.display = "block";
                            })
                             i4.remove();
                            o8.style.display = "block";
                            o8.textContent = femaleChooseText[8];
                             comp6.style.display = "flex";
                             c6.textContent = femaleComputerText[6];
                             localStorage.setItem("john5",john5.innerHTML);
             
                         },8000)  
             
             
                        }
                    })
             
                }
     
                
                if(o5.textContent.trim() ===  femaleChooseText[5].trim()){
                    let image = document.createElement("img");
                    image.setAttribute("src","./../../../../pics/femlae.jpg");
                    image.setAttribute("width","100%");
                    image.setAttribute("height","100%");
                    user5.appendChild(image);
                    u5.textContent = femaleUserText[5];
                    o5.addEventListener("click",()=>{
                        user5.style.display = "flex";
                        o5.remove();
                        o6.remove();
                        messages.style.display = "none";
                        o7.style.display = "block";
                        localStorage.setItem("contain5",contain5.innerHTML);
             
                    })
                }
                         

                if(o6.textContent.trim() === femaleChooseText[6].trim()){
                    let image = document.createElement("img");
                    image.setAttribute("src","./../../../../pics/femlae.jpg");
                    image.setAttribute("width","100%");
                    image.setAttribute("height","100%");
                    user6.appendChild(image);
                    u6.textContent = femaleUserText[6];
                    o6.addEventListener("click",()=>{
                     user6.style.display = "flex";
                     localStorage.setItem("contain6", contain6.innerHTML);
                     messages.style.display = "none";
                     if(u6.textContent.trim() === femaleUserText[6].trim()){
                         o6.remove();
                         o5.remove();
                         i2.style.display="flex";
                         setTimeout(()=>{
                            
                          i2.remove();
                          femaleComputerText[4] = "My friend William told me about you." ;
                          comp4.style.display = "flex";
                          c4.textContent = femaleComputerText[4];
                          localStorage.setItem("john3",john3.innerHTML);
                          setTimeout(()=>{i3.style.display = "flex";},1000)
             
                       },1000 ) 
                    
                       setTimeout(()=>{
                      
                        convo.style.display = "block";
                        comp0.style.display = "none";
                        contain0.style.display = "none";
                        convo.addEventListener("click",()=>{
                            comp0.style.display = "flex";
                            contain0.style.display = "block";
                        })
                          i3.remove();
                          femaleComputerText[5] = "He told that you helped him to find the culprit behind his father’s murder." ;
                          comp5.style.display = "flex";
                          c5.textContent = femaleComputerText[5];
                          localStorage.setItem("john4",john4.innerHTML);
                          setTimeout(()=>{i4.style.display = "flex";},1000)
                      },4000)  
             
                      setTimeout(()=>{
                       
                        contain1.style.display = "none";
                        convo.addEventListener("click",()=>{
                            contain1.style.display = "block";
                        })
                          i4.remove();
                          o8.style.display = "block";
                          o8.textContent = femaleChooseText[8];
                          femaleComputerText[6] = "He gave me your phone number so that I can contact you." ;
                          comp6.style.display = "flex";
                          c6.textContent = femaleComputerText[6];
                          localStorage.setItem("john5",john5.innerHTML);
             
                      },8000)  
                     }
                    })
             
             
                }
             
 
if(o7.textContent.trim() === chooseText[7].trim()){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user7.appendChild(image);
    o7.addEventListener("click",()=>{
        u7.textContent  = UserText[7];
   
        user7.style.display = "flex";
        localStorage.setItem("contain7", contain7.innerHTML);
        messages.style.display = "none";
        if(u7.textContent.trim() === UserText[7].trim()){
            o7.remove();
            i2.style.display="flex";
            setTimeout(()=>{
                convo.style.display = "block";
                comp0.style.display = "none";
                convo.addEventListener("click",()=>{
                    comp0.style.display = "flex";
                })
             i2.remove();
             o15.style.display = "block"; 
             comp3.style.display = "flex";
             c3.textContent = computerText[3];
             localStorage.setItem("john2",john2.innerHTML);

          },1000 ) 
         
   
        }
    })
}


if (o8.textContent.trim() === femaleChooseText[8].trim()){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user8.appendChild(image);
    u8.textContent = UserText[8];
      o8.addEventListener("click",() =>{
        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
        })
           messages.style.display = "none";
           o8.remove();
           o9.style.display = "block";
           user8.style.display = "flex";
           localStorage.setItem("contain8",contain8.innerHTML);
      })
}


if (o9.textContent.trim() === femaleChooseText[9].trim()){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user9.appendChild(image);
    u9.textContent  = femaleUserText[9];
       o9.addEventListener("click",()=>{
        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        contain3.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
            contain3.style.display = "block";
        })
        user9.style.display = "flex";
        localStorage.setItem("contain9",contain9.innerHTML);
        messages.style.display ="none"; 
        o9.remove();
        if(u9.textContent.trim() === femaleUserText[9].trim()){
            listAppear.addEventListener("click", ()=>{
              messages.style.display = "block";
              o10.style.display = "block";
              o11.style.display = "block";
            })
         
      }     

            
       })
 }



 if (o10.textContent.trim() === femaleChooseText[10].trim() ){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user10.appendChild(image);
    u10.textContent = femaleUserText[10];
     o10.addEventListener("click",()=>{
        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        contain3.style.display = "none";
        contain4.style.display = "none";
        contain2.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
            contain3.style.display = "block";
            contain2.style.display = "block";
            contain4.style.display = "block";
        })
        o10.remove();
         o11.remove();
      user10.style.display = "flex";
        localStorage.setItem("contain10",contain10.innerHTML);
        messages.style.display ="none"; 
        if(u10.textContent.trim() === femaleUserText[10].trim()){
            listAppear.addEventListener("click", ()=>{
              messages.style.display = "block";
              o11.remove();
              o12.style.display = "block";
            })
         
      }     



     })

 }




 if (o11.textContent.trim() === femaleChooseText[11].trim() ){
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user11.appendChild(image);
    u11.textContent = femaleUserText[11];
     o11.addEventListener("click",()=>{
        comp0.style.display = "none";
        john0.style.display = "none";
        contain0.style.display = "none";
        contain1.style.display = "none";
        contain2.style.display = "none";
        contain3.style.display = "none";
        contain4.style.display = "none";
        convo.addEventListener("click",()=>{
            comp0.style.display = "flex";
            john0.style.display = "block";
            contain0.style.display = "block";
            contain1.style.display = "block";
            contain2.style.display = "block";
            contain3.style.display = "block";
            contain4.style.display = "block";
        })
        o10.remove();
         o11.remove();
      user11.style.display = "flex";
        localStorage.setItem("contain11",contain11.innerHTML);
        messages.style.display ="none"; 
        if(u11.textContent.trim() === femaleUserText[11].trim()){
            listAppear.addEventListener("click", ()=>{
              messages.style.display = "block";
              o12.style.display = "block";
            })
         
      }     



     })

 }


 
 
 if (o12.textContent.trim() === femaleChooseText[12].trim() ){
    u12.textContent = femaleUserText[12];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user12.appendChild(image);
     o12.addEventListener("click",()=>{
       
        john3.style.display = "none";
        john4.style.display = "none";
        convo.addEventListener("click",()=>{
            john3.style.display = "block";
            john4.style.display = "block";
            
        })
       o12.remove();
      user12.style.display = "flex";
        localStorage.setItem("contain12",contain12.innerHTML);
        messages.style.display ="none"; 
        if(u12.textContent.trim() === femaleUserText[12].trim()){
            o12.remove();
            i6.style.display="flex";
            c7.textContent = femaleComputerText[7];
            c8.textContent = femaleComputerText[8];
            setTimeout(()=>{

                contain1.style.display = "none";
                john1.style.display = "none";
                convo.addEventListener("click",()=>{
                    contain1.style.display = "block";
                    john1.style.display = "block";
                    
                })
             i6.remove();
             comp7.style.display = "flex";
             localStorage.setItem("john6",john6.innerHTML);
             setTimeout(()=>{i7.style.display = "flex";},1000)

          },1000 ) 

          setTimeout(()=>{
         
            john0.style.display = "none";
            convo.addEventListener("click",()=>{
            john0.style.display = "block";
           })
            i7.remove();
            o13.style.display = "block";
            o14.style.display = "block";
            comp8.style.display = "flex";
            localStorage.setItem("john7",john7.innerHTML);
        },4000)  



        }

            
         
        



     })

 }


 if (o15.textContent.trim() === chooseText[15].trim() ){
    u15.textContent = UserText[15];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user15.appendChild(image);
     o15.addEventListener("click",()=>{
      john3.style.display = "none";
        john4.style.display = "none"; 
       convo.addEventListener("click",()=>{
            john3.style.display = "block";
            john4.style.display = "block";
            
        }) 
       o15.remove();
       user15.style.display = "flex";
        localStorage.setItem("contain15",contain15.innerHTML);
        messages.style.display ="none"; 
        contain0.style.display = "none";
        convo.addEventListener("click",()=>{
          contain0.style.display = "block";
        })
        if(u15.textContent.trim() === UserText[15].trim()){
            listAppear.addEventListener("click", ()=>{
                messages.style.display = "block";
                o15.remove();
                o16.style.display = "block";
              })
     
        }

            
         
        



     })

 }




 if(o16.textContent.trim() === femaleChooseText[16] ){
    u16.textContent = UserText[16];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user16.appendChild(image);
    o16.addEventListener("click",()=>{
        contain1.style.display = "none";
        convo.addEventListener("click",()=>{
            contain1.style.display = "block";
        })
        o16.remove();
        user16.style.display = "flex";
        localStorage.setItem("contain16",contain16.innerHTML);
        messages.style.display ="none";

        if(u16.textContent.trim() === UserText[16].trim()){
              messages.style.display = "block";
              o16.remove();
              i6.style.display="flex";
            c7.textContent = femaleComputerText[7];
            c8.textContent = femaleComputerText[8];
            c9.textContent = computerText[9];
            c10.textContent = computerText[10];
            c11.textContent = computerText[11];
            c12.textContent = computerText[12];
            setTimeout(()=>{
             
                contain1.style.display = "none";
                john1.style.display = "none";
                convo.addEventListener("click",()=>{
                    contain1.style.display = "block";
                    john1.style.display = "block";
                    
                })
             i6.remove();
             comp7.style.display = "flex";
             localStorage.setItem("john6",john6.innerHTML);
             setTimeout(()=>{i7.style.display = "flex";},1000)

          },1000 ) 

          setTimeout(()=>{
         
            john0.style.display = "none";
            contain2.style.display = "none";
            convo.addEventListener("click",()=>{
            john0.style.display = "block";
            contain2.style.display = "none";
           })
            i7.remove();
            comp8.style.display = "flex";
            localStorage.setItem("john7",john7.innerHTML);
            setTimeout(()=>{i8.style.display = "flex";},1000)
        },4000)  
            
        setTimeout(()=>{
         
            contain5.style.display = "none";
            convo.addEventListener("click",()=>{
            contain5.style.display = "block";
           })
            i8.remove();
            comp9.style.display = "flex";
            localStorage.setItem("john8",john8.innerHTML);
            setTimeout(()=>{i9.style.display = "flex";},1000)
        },6000)  

        setTimeout(()=>{
         
            contain7.style.display = "none";
            convo.addEventListener("click",()=>{
            contain7.style.display = "block";
           })
            i9.remove();
            comp10.style.display = "flex";
            localStorage.setItem("john9",john9.innerHTML);
            setTimeout(()=>{i10.style.display = "flex";},1000)
        },8000)   

        setTimeout(()=>{
         
            contain3.style.display = "none";
            john2.style.display = "none";
            convo.addEventListener("click",()=>{
            contain3.style.display = "block";
            john2.style.display = "block";
           })
            i10.remove();
            comp11.style.display = "flex";
            localStorage.setItem("john10",john10.innerHTML);
            setTimeout(()=>{i11.style.display = "flex";},1000)
        },12000)   

        setTimeout(()=>{
         
            contain15.style.display = "none";
            convo.addEventListener("click",()=>{
            contain15.style.display = "block";
           })
            i11.remove();
            o17.style.display = "block";
            comp12.style.display = "flex";
            localStorage.setItem("john11",john11.innerHTML);

        },15000)  

         
      }   

    
    })
}


if(o17.textContent.trim() === chooseText[17].trim()){
 
    let image = document.createElement("img");
   image.setAttribute("src","./../../../../pics/femlae.jpg");
   image.setAttribute("width","100%");
   image.setAttribute("height","100%");
   user17.appendChild(image);
   u17.textContent  = UserText[17];
   o17.addEventListener("click",()=>{
     contain16.style.display = "none";
       convo.addEventListener("click",()=>{
           contain16.style.display = "flex";
       })
       user17.style.display = "flex";
       localStorage.setItem("contain17", contain17.innerHTML);
       messages.style.display = "none";
       if(u17.textContent.trim() === UserText[17].trim()){
           o17.remove();
           i12.style.display="flex";
           setTimeout(()=>{
               john0.style.display = "none";
               convo.addEventListener("click",()=>{
                   john0.style.display = "block";
               })
            i12.remove();
            o18.style.display = "block"; 
            comp13.style.display = "flex";
            c13.textContent = computerText[13];
            localStorage.setItem("john12",john12.innerHTML);

         },1000 ) 



       } 
}) 



   }
    


   if(o18.textContent.trim() === chooseText[18].trim()){
   
           u18.textContent = UserText[18];

          let image = document.createElement("img");
          image.setAttribute("src","./../../../../pics/femlae.jpg");
          image.setAttribute("width","100%");
          image.setAttribute("height","100%");
          user18.appendChild(image);
          o18.addEventListener("click",()=>{
              o18.remove();
            user18.style.display = "flex";
            messages.style.display = "none";
             
            john6.style.display = "none";
            john7.style.display = "none";
            convo.addEventListener("click",()=>{
                john6.style.display = "block";
                john7.style.display = "block";
            })
            localStorage.setItem("contain18", contain18.innerHTML);
            if(u18.textContent.trim() === UserText[18].trim()){
                listAppear.addEventListener("click",()=>{
                    messages.style.display = "block";
                    o18.remove();
                    o13.style.display = "block";
                    o14.style.display = "block";
                })
            }

          }) 
}
  
    



if(o13.textContent.trim() === chooseText[13].trim()){
    u13.textContent = UserText[13];
    let image = document.createElement("img");
    image.setAttribute("src","./../../../../pics/femlae.jpg");
    image.setAttribute("width","100%");
    image.setAttribute("height","100%");
    user13.appendChild(image);
    o13.addEventListener("click",()=>{
          o13.remove();
          o14.remove();
          o17.remove();
          o18.remove();
          user13.style.display = "flex";
          messages.style.display = "none";
          localStorage.setItem("contain13",contain13.innerHTML);
            john8.style.display = "none";
            john5.style.display = "none";
            convo.addEventListener("click",()=>{
                john8.style.display = "block";
                john5.style.display = "block";
            })
            if(u13.textContent.trim() ===  UserText[13].trim()){
                john9.style.display = "none";
                contain8.style.display = "none"  ;
                convo.addEventListener("click",()=>{
                    john9.style.display = "block";
                    contain8.style.display = "block";
                })
                 i13.style.display = "flex";
              c14.textContent = computerText[14];
              c15.textContent = computerText[15];
              c16.textContent = computerText[16];
              c17.textContent = computerText[17];
              setTimeout(()=>{
               i13.remove();
           comp14.style.display = "flex";
           localStorage.setItem("john13",john13.innerHTML);
       setTimeout(()=>{i14.style.display = "flex";  john10.style.display = "none"  ;  contain9.style.display = "none" ;},1000) 

              },1000)


              setTimeout(()=>{
                  convo.addEventListener("click",()=>{john10.style.display = "block";  contain9.style.display = "block";})
                  i14.remove();
                  comp15.style.display = "flex";
                  localStorage.setItem("john14",john14.innerHTML);
                  setTimeout(()=>{i15.style.display = "flex";  },1000);

            },4000)


            setTimeout(()=>{
   
              i15.remove();
              comp16.style.display = "flex";
              localStorage.setItem("john15",john15.innerHTML);
              setTimeout(()=>{i16.style.display = "flex";john11.style.display = "none" ;    contain6.style.display = "none"; contain11.style.display = "none"; contain10.style.display = "none"},1000);
        },8000)

      
        setTimeout(()=>{
          convo.addEventListener("click",()=>{john11.style.display = "block";    contain6.style.display = "block"; contain11.style.display = "block";  contain10.style.display = "block"})
          i16.remove();
          comp17.style.display = "flex";
          localStorage.setItem("john16",john16.innerHTML);
          o19.style.display = "block";
          o20.style.display = "block";
    },10000)
        



            
      }           

    })
}




if(o14.textContent.trim() === chooseText[14].trim()){
u14.textContent = UserText[14];
let image = document.createElement("img");
image.setAttribute("src","./../../../../pics/femlae.jpg");
image.setAttribute("width","100%");
image.setAttribute("height","100%");
user14.appendChild(image);
o14.addEventListener("click",()=>{
    o13.remove();
    o14.remove();
    o17.remove();
    o18.remove();
    user14.style.display = "flex";
    messages.style.display = "none";
    localStorage.setItem("contain14",contain14.innerHTML);
      john8.style.display = "none";
      john5.style.display = "none";
      convo.addEventListener("click",()=>{
          john8.style.display = "block";
          john5.style.display = "block";
              })
      if(u14.textContent.trim() ===  UserText[14].trim()){
        john9.style.display = "none";
        contain8.style.display = "none"  ;
        convo.addEventListener("click",()=>{
            john9.style.display = "block";
            contain8.style.display = "block";
        })
           i13.style.display = "flex";
        c14.textContent = computerText[14];
        c15.textContent = computerText[15];
        c16.textContent = computerText[16];
        c17.textContent = computerText[17];
        setTimeout(()=>{
         i13.remove();
     comp14.style.display = "flex";
     localStorage.setItem("john13",john13.innerHTML);
 setTimeout(()=>{i14.style.display = "flex";  john10.style.display = "none"  ;  contain9.style.display = "none" ;},1000); 

        },1000)


        setTimeout(()=>{
            convo.addEventListener("click",()=>{john10.style.display = "block";  contain9.style.display = "block";})
            i14.remove();
            comp15.style.display = "flex";
            localStorage.setItem("john14",john14.innerHTML);
            setTimeout(()=>{i15.style.display = "flex";  },1000);

      },4000)


      setTimeout(()=>{

        i15.remove();
        comp16.style.display = "flex";
        localStorage.setItem("john15",john15.innerHTML);
        setTimeout(()=>{i16.style.display = "flex";john11.style.display = "none" ;    contain6.style.display = "none"; contain11.style.display = "none";   contain10.style.display = "none"},1000);
  },8000)


  setTimeout(()=>{
    convo.addEventListener("click",()=>{john11.style.display = "block";    contain6.style.display = "block"; contain11.style.display = "block";  contain10.style.display = "block"})
    i16.remove();
    comp17.style.display = "flex";
    localStorage.setItem("john16",john16.innerHTML);
    o19.style.display = "block";
    o20.style.display = "block";
},10000)
  



      
}           

})
}














        }  
   















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


let save = localStorage.getItem("nameOfChar");


if(save){
    pName.innerHTML = save;
   }

//user local 

  if (savedUser0){
      
     contain0.innerHTML = savedUser0;
     o0.remove();
     o1.style.display = "block";
 
   

 } 


  if (savedUser1){
     contain1.innerHTML = savedUser1;
     o1.remove();
     o0.remove();
  if(userMaleSaved){
    c1.textContent = computerText[1];
  }


  else{
    c1.textContent = femaleComputerText[1]
  }

     comp1.style.display = "flex";
     o2.style.display = "block";
     o3.style.display = "block";

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

if(savedUser4){
    contain4.innerHTML = savedUser4;
    o4.remove();
    
}


if(savedUser5){
    contain5.innerHTML = savedUser5;
    o5.remove();
   o6.remove();
   o7.style.display = "block";

}


if(savedUser6){
    contain6.innerHTML = savedUser6;
    o5.remove();
   o6.remove();

}


if(savedUser7){
    contain7.innerHTML = savedUser7;
   o7.remove();

}


if(savedUser8){
    contain8.innerHTML = savedUser8;
   o8.remove();
   o9.style.display = "block";
   comp0.style.display = "none";
   john0.style.display = "none";
   contain0.style.display = "none";
   contain1.style.display = "none";
   convo.addEventListener("click",()=>{
       comp0.style.display = "flex";
       john0.style.display = "block";
       contain0.style.display = "block";
       contain1.style.display = "block";
   })



}

if(savedUser9){
    contain9.innerHTML = savedUser9;
   o9.remove();
   o10.style.display = "block";
   o11.style.display = "block";
   comp0.style.display = "none";
   john0.style.display = "none";
   contain0.style.display = "none";
   contain1.style.display = "none";
   contain3.style.display = "none";
   convo.addEventListener("click",()=>{
       comp0.style.display = "flex";
       john0.style.display = "block";
       contain0.style.display = "block";
       contain1.style.display = "block";
       contain3.style.display = "block";
   })


}


if(savedUser10){
    contain10.innerHTML = savedUser10;
   o10.remove();
   o11.remove();
    o12.style.display = "block"; 
    comp0.style.display = "none";
    john0.style.display = "none";
    contain0.style.display = "none";
    contain1.style.display = "none";
    contain2.style.display = "none";
    contain3.style.display = "none";
    contain4.style.display = "none";
    convo.addEventListener("click",()=>{
        comp0.style.display = "flex";
        john0.style.display = "block";
        contain0.style.display = "block";
        contain2.style.display = "block";
        contain1.style.display = "block";
        contain3.style.display = "block";
        contain4.style.display = "block";
    })
}

 if(savedUser11){
    contain11.innerHTML = savedUser11;
   o10.remove();
   o11.remove();
    o12.style.display = "block"; 
    comp0.style.display = "none";
    john0.style.display = "none";
    contain0.style.display = "none";
    contain1.style.display = "none";
    contain3.style.display = "none";
    contain4.style.display = "none";
    contain2.style.display = "none";
    convo.addEventListener("click",()=>{
        comp0.style.display = "flex";
        john0.style.display = "block";
        contain0.style.display = "block";
        contain1.style.display = "block";
        contain2.style.display = "block";
        contain3.style.display = "block";
        contain4.style.display = "block";
    })

}
 


if(savedUser12){
    contain12.innerHTML = savedUser12;
   o12.remove();
   if(userMaleSaved){
    c7.textContent = computerText[7];
    c8.textContent = computerText[8];
   }
   if(userFemaleSaved){
    c7.textContent = computerText[7];
    c8.textContent = computerText[8];
       }
       john3.style.display = "none";
       john4.style.display = "none";
       convo.addEventListener("click",()=>{
           john3.style.display = "block";
           john4.style.display = "block";
       })
     comp7.style.display = "flex"  ;
     comp8.style.display = "flex";
}
 



if(savedUser15){
    contain15.innerHTML = savedUser15;
   o15.remove();
   o16.textContent = chooseText[16];
   o16.style.display = "block"; 
   contain0.style.display = "none";
   convo.addEventListener("click",()=>{
     contain0.style.display = "block";
   })
}
 


if(savedUser16){
    contain16.innerHTML = savedUser16;
   o16.remove();
   if(userMaleSaved){
    c7.textContent = femaleComputerText[7];
    c8.textContent = femaleComputerText[8];
    c9.textContent = computerText[9];
    c10.textContent = computerText[10];
    c11.textContent = computerText[11];
    c12.textContent = computerText[12];
   }
   if(userFemaleSaved){
    c7.textContent = femaleComputerText[7];
    c8.textContent = femaleComputerText[8];
    c9.textContent = computerText[9];
    c10.textContent = computerText[10];
      c11.textContent = computerText[11];
      c12.textContent = computerText[12];
       }
    contain1.style.display= "none";
    contain2.style.display= "none";
    contain3.style.display= "none";
    contain5.style.display = "none";
    contain7.style.display = "none";
    contain15.style.display = "none";
    john2.style.display = "none";
       convo.addEventListener("click",()=>{
        contain1.style.display= "block";
        contain2.style.display = "block";
        contain3.style.display= "block";
        contain5.style.display = "block";
        contain7.style.display= "block";
        contain15.style.display = "block";
        john2.style.display = "block";
       })
       comp9.style.display = "flex";
       comp10.style.display = "flex";
       comp11.style.display = "flex";
       comp12.style.display = "flex";
       o13.style.display = "none";
       o14.style.display = "none";
       o17.style.display = "block";
}
 


if(savedUser17){
    contain17.innerHTML = savedUser17;
   o17.remove();
  o18.style.display = "block";   
   contain16.style.display = "none";
   john6.style.display = "none";
john0.style.display = "none";
   convo.addEventListener("click",()=>{
     contain16.style.display = "block";
     john6.style.display = "block";
     john0.style.display = "block";
   })
   c13.textContent = computerText[13];
   comp13.style.display = "flex";
}
 


if(savedUser18){
    contain18.innerHTML = savedUser18;
     o18.remove();
     o13.textContent = chooseText[13];
     o14.textContent = chooseText[14];
            user18.style.display = "flex";
            o13.style.display = "block";
            o14.style.display = "block";
            john6.style.display = "none";
            john7.style.display = "none";
            convo.addEventListener("click",()=>{
                john6.style.display = "block";
                john7.style.display = "block";
            })
}





if(savedUser13){
    contain13.innerHTML = savedUser13;
     o13.remove();
     o14.remove();
     o17.remove();
     o18.remove();
  user13.style.display = "flex";
  john8.style.display = "none";
     john5.style.display = "none";
     john9.style.display = "none";
     john10.style.display = "none";
     john11.style.display = "none"
     contain8.style.display = "none";
     contain9.style.display = "none";
     contain10.style.display = "none";
     contain11.style.display = "none"; 
     contain6.style.display = "none";
         convo.addEventListener("click",()=>{
            john5.style.display = "block";
            john8.style.display = "block";
            john9.style.display = "block";
            john10.style.display = "block";
            john11.style.display = "block";
        contain8.style.display = "block";
        contain10.style.display = "block";
        contain11.style.display = "block"; 
        contain6.style.display = "block";
            })
            c14.textContent = computerText[14];
   comp14.style.display = "flex";
   c15.textContent = computerText[15];
   comp15.style.display = "flex";
   c16.textContent = computerText[16];
   comp16.style.display = "flex";
   c17.textContent = computerText[17];
   comp17.style.display = "flex";

}


if(savedUser14){
    contain14.innerHTML = savedUser14;
     o13.remove();
     o14.remove();
     o17.remove();
     o18.remove();
  user14.style.display = "flex";
  john8.style.display = "none";
  john5.style.display = "none";
  john9.style.display = "none";
  john10.style.display = "none";
  john11.style.display = "none"
  contain8.style.display = "none";
  contain9.style.display = "none";
  contain10.style.display = "none";
  contain11.style.display = "none"; 
  contain6.style.display = "none";
      convo.addEventListener("click",()=>{
         john5.style.display = "block";
         john8.style.display = "block";
         john9.style.display = "block";
         john10.style.display = "block";
         john11.style.display = "block";
     contain8.style.display = "block";
     contain10.style.display = "block";
     contain11.style.display = "block"; 
     contain6.style.display = "block";
         })
            c14.textContent = computerText[14];
   comp14.style.display = "flex";
   c15.textContent = computerText[15];
   comp15.style.display = "flex";
   c16.textContent = computerText[16];
   comp16.style.display = "flex";
   c17.textContent = computerText[17];
   comp17.style.display = "flex";

}







 





//computer local
 if(savedComp0){

  o2.style.display = "block";
  o3.style.display = "block";
 }


  if (savedComp1){
    john1.innerHTML = savedComp1; 
     o5.style.display = "block";
     o6.style.display = "block";
}

if (savedComp2){
    john2.innerHTML = savedComp2; 
    o15.textContent = chooseText[15];
    o15.style.display = "block";  
     convo.style.display = "block";
    comp0.style.display = "none";
    convo.addEventListener("click",()=>{
        comp0.style.display = "flex";
    })
    
}



if (savedComp3){
    john3.innerHTML = savedComp3;
    if(userMaleSaved){
        c4.textContent = computerText[4];
           c5.textContent = computerText[5];
           c6.textContent = computerText[6];
    }

    if(userFemaleSaved){
        c4.textContent = femaleComputerText[4];
        c5.textContent = femaleComputerText[5];
        c6.textContent = femaleComputerText[6];
    }

      
     comp4.style.display = "flex";
    comp5.style.display = "flex";
    comp6.style.display = "flex";
  
  
  
}

if (savedComp4){
    john4.innerHTML = savedComp4; 
    convo.style.display = "block";
    if(userMaleSaved){
        c5.textContent = computerText[5];
        c6.textContent = computerText[6];
    }

    if(userFemaleSaved){
        c5.textContent = femaleComputerText[5];
        c6.textContent = femaleComputerText[6];
    }
     comp0.style.display = "none";
     contain0.style.display = "none";
    comp5.style.display = "flex";
    comp6.style.display = "flex";

    convo.addEventListener("click",()=>{
        comp0.style.display = "flex";
        contain0.style.display = "block";
    })



}


if (savedComp5){
    john5.innerHTML = savedComp5; 
    if(userMaleSaved){
        c6.textContent = computerText[6];
        o8.textContent = chooseText[8];
    }

    if(userFemaleSaved){
        c6.textContent = femaleComputerText[6];
        o8.textContent = chooseText[8];
    }

    o8.style.display = "block";
    comp6.style.display = "flex";
    comp0.style.display = "none";
    contain0.style.display = "none";
    contain1.style.display = "none";
    convo.addEventListener("click",()=>{
        comp0.style.display = "flex";
        contain0.style.display = "block";
        contain1.style.display = "block";
    })

}




if (savedComp6){
    john6.innerHTML = savedComp6; 
    if(userMaleSaved){
        c7.textContent = computerText[7];
        c8.textContent = computerText[8];
    }

    if(userFemaleSaved){
        c7.textContent = femaleComputerText[7];
        c8.textContent = femaleComputerText[8];
    }

    comp7.style.display = "flex";
    comp8.style.display = "flex";
      contain1.style.display = "none";
                john1.style.display = "none";
                convo.addEventListener("click",()=>{
                    contain1.style.display = "block";
                    john1.style.display = "block";
                    
                })
}


if (savedComp7){
    john7.innerHTML = savedComp7; 
    if(userMaleSaved){
        c8.textContent = computerText[8];
        o13.textContent = femaleChooseText[13]; 
        o14.textContent = femaleChooseText[14]; 
    }

    if(userFemaleSaved){
        c8.textContent = femaleComputerText[8];
         o13.textContent = femaleChooseText[13]; 
         o14.textContent = femaleChooseText[14]; 
    }


  o13.style.display = "block";
  o14.style.display = "block";
    comp8.style.display = "flex";
    john0.style.display = "none";
    john0.style.display = "none";
    convo.addEventListener("click",()=>{
    john0.style.display = "block";
    john0.style.display = "block";
   })

   
}


if (savedComp8){
    john8.innerHTML = savedComp8; 
    if(userMaleSaved){
        c9.textContent = computerText[9];
    }

    if(userFemaleSaved){
        c9.textContent = femaleComputerText[9];
    
    }


  

    contain2.style.display = "none";
    convo.addEventListener("click",()=>{
    contain2.style.display = "block";
   
   })

   
}



if (savedComp9){
    john9.innerHTML = savedComp9; 
    if(userMaleSaved){
        c10.textContent = computerText[10];
    }

    if(userFemaleSaved){
        c10.textContent = femaleComputerText[10];
    
    }


  
    contain5.style.display = "none";
    convo.addEventListener("click",()=>{
    contain5.style.display = "block";
   })

   
}

if (savedComp10){
    john10.innerHTML = savedComp10; 
    if(userMaleSaved){
        c11.textContent = computerText[11];
    }

    if(userFemaleSaved){
        c11.textContent = femaleComputerText[11];
    
    }


  
    contain3.style.display = "none";
    john2.style.display = "none";
    convo.addEventListener("click",()=>{
    contain3.style.display = "block";
    john2.style.display = "block";
   })
   
}


if (savedComp11){
    john11.innerHTML = savedComp11; 
    if(userMaleSaved){
        c12.textContent = computerText[12];
        o17.textContent = chooseText[17];
    }

    if(userFemaleSaved){
        c12.textContent = femaleComputerText[12];
        o17.textContent = chooseText[17];
    }

   o17.style.display = "block";
  
   
}


if (savedComp12){
    john12.innerHTML = savedComp12; 
    if(userMaleSaved){
        c13.textContent = computerText[13];

    }

    if(userFemaleSaved){
        c12.textContent = femaleComputerText[12];
  
    }

    john0.style.display ="none";
    convo.addEventListener("click",()=>{
        john0.style.display = "block"
    })
    o18.textContent = chooseText[18];
   o18.style.display = "block";
  
   
}



if (savedComp13){

    john13.innerHTML = savedComp13; 

}



if (savedComp14){

    john14.innerHTML = savedComp14; 

}


if (savedComp15){

    john15.innerHTML = savedComp15; 

}


if (savedComp16){

    john16.innerHTML = savedComp16; 
   o19.style.display = "block";
    o20.style.display="block";
}