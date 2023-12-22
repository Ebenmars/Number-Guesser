"use strict";
// message = 13;

// // console.log(document.querySelector("#number").textContent);

// document.querySelector("#number").textContent = 9;

// document.querySelector("#number-gussed").value = 23;
// console.log(document.querySelector("#number-gussed").value);

const checkBtn = document.querySelector("#check-guess");
let count = 1;

let highScore = document.querySelector("#most-attempts");

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

  let attempts = document.querySelector("#attempts");

checkBtn.addEventListener("click", function () {
  let numberGuess = document.querySelector("#number-guessed").value;

   if(!numberGuess) {
    alert("Please enter a number");
  } else if (numberGuess == randomNumber) {
    
    document.querySelector("#right-or-wrong").textContent =
      "You Got It Right ✅!!";
      document.querySelector("#number").textContent = randomNumber;
  } else if (numberGuess > randomNumber) {
    count++;
    if (count  < 12){
      document.querySelector("#right-or-wrong").textContent = "Too High!!";
    }
    else{
        document.querySelector("#right-or-wrong").textContent =
          "Wow Your Bad At This, Game Over!!";
          count = 0;
    }
  } 
  else{
    count++;
     document.querySelector("#right-or-wrong").textContent = "Too Low!!";
    
  }
  attempts.textContent = count;


});
  highScore.textContent = attempts.value;


