//game phone site
// home button
const back = document.querySelector(".home");
back.addEventListener("click",()=>{
    window.location.replace("./../Disapperaerd-game-home-page/game-home.html");
});

//dialing
//number 1 
   const one = document.getElementById("one");
   one.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "1";
   });

   //number 2
   const two = document.getElementById("two");
   two.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "2";
   });


   //number 3
   const three = document.getElementById("three");
   three.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "3";
   });


   //number 4
   const four = document.getElementById("four");
   four.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "4";
   });



   //number 5
   const five = document.getElementById("five");
   five.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "5";
   });



   //number 6
   const six = document.getElementById("six");
   six.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "6";
   });



   //number 7 
   const seven = document.getElementById("seven");
   seven.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "7";
   });



   //number 8
   const eight = document.getElementById("eight");
   eight.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "8";
   });



   //number 9
   const nine = document.getElementById("nine");
   nine.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "9";
   });


   //number 0
   const zero = document.getElementById("zero");
  zero.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "0";
   });



   //number *
   const star = document.getElementById("star");
   star.addEventListener("click", () =>{
       let numberDisplay = document.querySelector(".display-number");
       numberDisplay.innerHTML = numberDisplay.innerHTML + "*";
   });
 

      //number #
      const hash = document.getElementById("hash");
      hash.addEventListener("click", () =>{
          let numberDisplay = document.querySelector(".display-number");
          numberDisplay.innerHTML = numberDisplay.innerHTML + "#";
      });
    


      
//calling button
const dial = document.querySelector(".dial");
dial.addEventListener("click",() =>{
    let numberDisplay = document.querySelector(".display-number");
    numberDisplay.style.display = "none";
     let numbers = document.querySelector(".numbers");
     numbers.style.display = "none";
     let navigation = document.querySelector(".navigation-part");
     navigation.style.display = "none";
     let OnCalling = document.querySelector(".container");
     OnCalling.style.display = "block";
     let content = document.querySelector(".content");
     content.textContent = numberDisplay.innerHTML;

});

      
//ending call button
const End  = document.querySelector(".call");
End.addEventListener("click",() =>{
    let numberDisplay = document.querySelector(".display-number");
    numberDisplay.style.display = "block";
     let numbers = document.querySelector(".numbers");
     numbers.style.display = "block";
     let navigation = document.querySelector(".navigation-part");
     navigation.style.display = "block";
     let OnCalling = document.querySelector(".container");
     OnCalling.style.display = "none";
     let content = document.querySelector(".content");
     content.textContent = numberDisplay.innerHTML;
});

