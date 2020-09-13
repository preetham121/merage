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
"He told me that you are a detective and you are best in your work.","He told that you helped him to find the culprit behind his father’s murder within a day."];

let computerText = ["Hey!","My name is John. I’m from Rosewood.", `Are you detective ${UserNameSaved} ?`,"What do you mean by “I was” ?","My friend William gave me your number.",
"He told me that you are a detective and you are best in your work.", "He told that you helped him to find the culprit behind his father’s murder within a day."];

let femaleUserText =  ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?","Yes!","How do you know me ?",
"I mean I was","I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job."];

let UserText = ["Hey!","Do I know you?","Hello John!", `Hello John, My name is ${UserNameSaved}`,"How did you get my number?","Yes!","How do you know me ?",
"I mean I was", "I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job."];

let chooseText = ["Hey!","Do I know you?","Hello John!" ,`Hello John, My name is ${UserNameSaved}`,"How did you get my number ?","Yes!","How do you know me ?",
"I mean I was", "I remember him but…","If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job."];

let femaleChooseText = ["Hey!","Do I know you?","Hello John!" ,`Hello John, My name is ${UserNameSaved}`,"How did you get my number ?","Yes!","How do you know me ?",
"I mean I was", "I remember him but…" ,"If you are here for some kind of case","you must know I don’t do detective things anymore.","then...I’m no help to you.",
"I quit my job."];




const input = document.querySelector(".input");
let pName = document.querySelector(".pName");

const  c0 =  document.getElementById("c0"); 
const  c1 =  document.getElementById("c1"); 
const  c2 =  document.getElementById("c2"); 
const  c3 =  document.getElementById("c3"); 
const  c4 =  document.getElementById("c4"); 
const  c5 =  document.getElementById("c5");
const  c6 =  document.getElementById("c6"); 

const comp0 = document.getElementById("comp0");
const comp1 = document.getElementById("comp1");
const comp2 = document.getElementById("comp2");
const comp3 = document.getElementById("comp3");
const comp4 = document.getElementById("comp4");
const comp5 = document.getElementById("comp5");
const comp6 = document.getElementById("comp6");
const john0 = document.getElementById("john0");
const john1 = document.getElementById("john1");
const john2 = document.getElementById("john2");
const john3 = document.getElementById("john3");
const john4 = document.getElementById("john4");
const john5 = document.getElementById("john5");

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

const img0 = document.getElementById("Img0");
const img1 = document.getElementById("Img1");
const img2 = document.getElementById("Img2");
const img3 = document.getElementById("Img3");
const img4 = document.getElementById("Img4");
const img5 = document.getElementById("Img5");
const img6 = document.getElementById("Img6");
const img7 = document.getElementById("Img7");
const img8 = document.getElementById("Img8");
const img9 = document.getElementById("Img9");
const img10 = document.getElementById("Img10");
const img11 = document.getElementById("Img11");
const img12 = document.getElementById("Img12");


const i0 = document.getElementById("i0");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");

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
        o0.addEventListener("click",()=>{   
            img0.src = "./../../../../pics/usermaleB.jpg";
            user0.style.display = "block";
           localStorage.setItem("contain0",contain0.innerHTML);
             messages.style.display = "none";
            o0.remove();
      })}
    
    
     
         
        if(o1.textContent.trim() === chooseText[1].trim()){
            o1.addEventListener("click",()=>{
             user1.style.display = "block";
             img1.src = "./../../../../pics/usermaleB.jpg";
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
         
    
    if(o2.textContent.trim() === chooseText[2].trim()){
        o2.addEventListener("click",()=>{
            img2.src = "./../../../../pics/usermaleB.jpg";
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
            img3.src = "./../../../../pics/usermaleB.jpg";
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
       o4.addEventListener("click",()=>{
           u4.textContent  = UserText[4];
           user4.style.display = "block";
           img4.src = "./../../../../pics/usermaleB.jpg";
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
                setTimeout(()=>{i3.style.display = "flex";},1000)

             },1000 ) 
          
             setTimeout(()=>{
                i3.remove();
                comp5.style.display = "flex";
                c5.textContent = computerText[5];
                localStorage.setItem("john4",john4.innerHTML);
                setTimeout(()=>{i4.style.display = "flex";},1000)
            },4000)  

            setTimeout(()=>{
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
       o5.addEventListener("click",()=>{
           user5.style.display = "block";
           img5.src = "./../../../../pics/usermaleB.jpg";
           o5.remove();
           o6.remove();
           messages.style.display = "none";
           o7.style.display = "block";
           localStorage.setItem("contain5",contain5.innerHTML);

       })
   }



   if(o6.textContent.trim() === chooseText[6].trim()){
       u6.textContent = UserText[6];
       o6.addEventListener("click",()=>{
        user6.style.display = "block";
        img6.src = "./../../../../pics/usermaleB.jpg";
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
             i3.remove();
             computerText[5] = "He told that you helped him to find the culprit behind his father’s murder."
             comp5.style.display = "flex";
             c5.textContent = computerText[5];
             localStorage.setItem("john4",john4.innerHTML);
             setTimeout(()=>{i4.style.display = "flex";},1000)
         },4000)  

         setTimeout(()=>{
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

    o7.addEventListener("click",()=>{
        u7.textContent  = UserText[7];
        user7.style.display = "block";
        img7.src = "./../../../../pics/usermaleB.jpg";
        localStorage.setItem("contain7", contain7.innerHTML);
        messages.style.display = "none";
        if(u7.textContent.trim() === UserText[7].trim()){
            o7.remove();
            i2.style.display="flex";
            setTimeout(()=>{
             i2.remove();
            /*   o8.style.display = "block"; */
            
             comp3.style.display = "flex";
             c3.textContent = computerText[3];
             localStorage.setItem("john2",john2.innerHTML);

          },1000 ) 
         
   
        }
    })
}



 if (o8.textContent.trim() === chooseText[8].trim()){
       u8.textContent = UserText[8];
         o8.addEventListener("click",() =>{
              messages.style.display = "none";
              o8.remove();
              o9.style.display = "block";
              user8.style.display = "block";
              img8.src = "./../../../../pics/usermaleB.jpg";
              localStorage.setItem("contain8",contain8.innerHTML);
         })
 }

 if (o9.textContent.trim() === chooseText[9].trim()){
    u9.textContent  = UserText[9];
       o9.addEventListener("click",()=>{
        user9.style.display = "block";
        img9.src = "./../../../../pics/usermaleB.jpg";
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
     o10.addEventListener("click",()=>{
        o10.remove();
         o11.remove();
      user10.style.display = "block";
      img10.src = "./../../../../pics/usermaleB.jpg";
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
     o11.addEventListener("click",()=>{
        o10.remove();
         o11.remove();
      user11.style.display = "block";
      img11.src = "./../../../../pics/usermaleB.jpg";
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









    }
    

    


    

      
          if (userFemaleSaved){

            control.style.display = "none";


            if(o0.textContent.trim() === chooseText[0].trim()){
                o0.addEventListener("click",()=>{
                    user0.style.display = "block";
                    img0.src = "./../../../../pics/femlae.jpg";
                   localStorage.setItem("contain0",contain0.innerHTML);
                     messages.style.display = "none";
                    o0.remove();
              })}
            
            
                 
                if(o1.textContent.trim() === chooseText[1].trim()){
                    o1.addEventListener("click",()=>{
                     user1.style.display = "block";
                     img1.src = "./../../../../pics/femlae.jpg";
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
                o2.addEventListener("click",()=>{
                    user2.style.display = "block";
                    img2.src = "./../../../../pics/femlae.jpg";
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
                o3.addEventListener("click",()=>{
                 u3.textContent = femaleUserText[3];
                 img3.src = "./../../../../pics/femlae.jpg";
                    user3.style.display = "block";
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
                    o4.addEventListener("click",()=>{
                        u4.textContent  = femaleUserText[4];
                        user4.style.display = "block";
                        img4.src = "./../../../../pics/femlae.jpg";
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
                             i3.remove();
                             comp5.style.display = "flex";
                             c5.textContent = femaleComputerText[5];
                             localStorage.setItem("john4",john4.innerHTML);
                             setTimeout(()=>{i4.style.display = "flex";},1000)
                         },4000)  
             
                         setTimeout(()=>{
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
                    u5.textContent = femaleUserText[5];
                    o5.addEventListener("click",()=>{
                        user5.style.display = "block";
                        img5.src = "./../../../../pics/femlae.jpg";
                        o5.remove();
                        o6.remove();
                        messages.style.display = "none";
                        o7.style.display = "block";
                        localStorage.setItem("contain5",contain5.innerHTML);
             
                    })
                }
                         

                if(o6.textContent.trim() === femaleChooseText[6].trim()){
                    u6.textContent = femaleUserText[6];
                    o6.addEventListener("click",()=>{
                     user6.style.display = "block";
                     img6.src = "./../../../../pics/femlae.jpg";
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
                          i3.remove();
                          femaleComputerText[5] = "He told that you helped him to find the culprit behind his father’s murder." ;
                          comp5.style.display = "flex";
                          c5.textContent = femaleComputerText[5];
                          localStorage.setItem("john4",john4.innerHTML);
                          setTimeout(()=>{i4.style.display = "flex";},1000)
                      },4000)  
             
                      setTimeout(()=>{
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
             
             
if(o7.textContent.trim() === femaleChooseText[7].trim()){

    o7.addEventListener("click",()=>{
        u7.textContent  = femaleUserText[7];
        user7.style.display = "block";
        img7.src = "./../../../../pics/femlae.jpg";
        localStorage.setItem("contain7", contain7.innerHTML);
        messages.style.display = "none";
        if(u7.textContent.trim() === femaleUserText[7].trim()){
            o7.remove();
            i2.style.display="flex";
            setTimeout(()=>{
             i2.remove();
             /* o5.style.display = "block";
             o6.style.display = "block"; */
             comp3.style.display = "flex";
             c3.textContent = femaleComputerText[3];
             localStorage.setItem("john2",john2.innerHTML);

          },1000 ) 
         
   
        }
    })
}


if (o8.textContent.trim() === femaleChooseText[8].trim()){
    u8.textContent = UserText[8];
      o8.addEventListener("click",() =>{
           messages.style.display = "none";
           o8.remove();
           o9.style.display = "block";
           user8.style.display = "block";
           img8.src = "./../../../../pics/femlae.jpg";
           localStorage.setItem("contain8",contain8.innerHTML);
      })
}


if (o9.textContent.trim() === femaleChooseText[9].trim()){
    u9.textContent  = femaleUserText[9];
       o9.addEventListener("click",()=>{
        user9.style.display = "block";
        img9.src = "./../../../../pics/femlae.jpg";
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
    u10.textContent = femaleUserText[10];
    img10.src = "./../../../../pics/femlae.jpg";
     o10.addEventListener("click",()=>{
        o10.remove();
         o11.remove();
      user10.style.display = "block";
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
    u11.textContent = femaleUserText[11];
    img11.src = "./../../../../pics/femlae.jpg";
     o11.addEventListener("click",()=>{
        o10.remove();
         o11.remove();
      user11.style.display = "block";
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

 let savedComp0 = localStorage.getItem("john0");
 let savedComp1 = localStorage.getItem("john1");
 let savedComp2 = localStorage.getItem("john2"); 
 let savedComp3 = localStorage.getItem("john3"); 
 let savedComp4 = localStorage.getItem("john4");
 let savedComp5 = localStorage.getItem("john5");

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



}

if(savedUser9){
    contain9.innerHTML = savedUser9;
   o9.remove();
   o10.style.display = "block";
   o11.style.display = "block";

}

if(savedUser10){
    contain10.innerHTML = savedUser10;
   o10.remove();
   o11.remove();
    o12.style.display = "block"; 
}

 if(savedUser11){
    contain11.innerHTML = savedUser11;
   o10.remove();
   011.remove();
    o12.style.display = "block"; 

}
 







//computer local



  if (savedComp1){
    john1.innerHTML = savedComp1; 
     o5.style.display = "block";
     o6.style.display = "block";
}

if (savedComp2){
    john2.innerHTML = savedComp2; 

    
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
    if(userMaleSaved){
        c5.textContent = computerText[5];
        c6.textContent = computerText[6];
    }

    if(userFemaleSaved){
        c5.textContent = femaleComputerText[5];
        c6.textContent = femaleComputerText[6];
    }

    comp5.style.display = "flex";
    comp6.style.display = "flex";
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
}



