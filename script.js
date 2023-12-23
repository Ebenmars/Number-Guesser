"use strict";

const checkBtn = document.querySelector("#check-guess");
let count = 0;

let randomNumber = Math.floor(Math.random(1) * 20);


let attempts = document.querySelector("#attempts");

let leastAttempts = 20;

checkBtn.addEventListener("click", function () {
  isMyNumber();
});

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random(1) * 20);
  isMyNumber();
  document.querySelector("#number-guessed").value = "";
  document.querySelector("#number").textContent = "?";
  count = 0;
  attempts.textContent = 0;
  document.querySelector("#right-or-wrong").textContent = "Make A Guess";
  document.querySelector(".container").style.backgroundColor = "#f5f5f5";
});

function isMyNumber() {
  let numberGuess = document.querySelector("#number-guessed").value;

  //if user does not enter a number
  if (!numberGuess) {
    alert("Please enter a number");
    //if user enters a number equal to the random number
  } else if (numberGuess == randomNumber) {
    count++;
    document.querySelector(".container").style.backgroundColor = "#2dfe54";
    document.querySelector(".display-number span").style.backgroundColor =
      "white";

    document.querySelector("#right-or-wrong").textContent =
      "You Got It Right ✅!!";
    document.querySelector("#number").textContent = randomNumber;
    if (count < leastAttempts) {
      leastAttempts = count;
    }
    //if user enters a number greater than 20
  } else if (numberGuess > randomNumber) {
    count++;
    //if user enters a number greater than 20
    if (count < 21) {
      document.querySelector("#right-or-wrong").textContent = "Too High!!";
    } else {
      document.querySelector("#right-or-wrong").textContent = "Game Over!!";
      count = 0;
    }

    //if user enters a number less than 20
  } else {
    count++;
    document.querySelector("#right-or-wrong").textContent = "Too Low!!";
  }
  attempts.textContent = count;
  document.querySelector("#least-attempts").textContent = leastAttempts;
}
