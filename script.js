"use strict"

//get elements from html

const guessNumber = document.querySelector('#guessNumber');
const submitButton = document.querySelector('#submit-button');
const previousGuess = document.querySelector('#previous');
const wrongRight = document.querySelector('#wrong-right');
const lowHigh = document.querySelector('#low-high');
const newGame = document.querySelector("#newGame");

//end here get elements from html

//const genRandomNumber = (n = 100) =>  Math.floor(Math.random() * n)+1;
let randomNumber ;
function genRandomNumber(n = 100){ //default value assign under the perameters
    randomNumber =  Math.floor(Math.random() * n)+1; 
}
//end here generate number function
genRandomNumber(100);
 
// result show on the submit button click
let count = 0;
const  previousText = 'Previous guesses: '; 
let previousNumber = " ";

submitButton.addEventListener('click', function (){ 
    count++;

    const userGuessNumber = guessNumber.value;
    wrongRight.classList.add("p-2");
    previousNumber += " " + userGuessNumber; 
    previousGuess.textContent = previousText + previousNumber; 
    guessNumber.value = "";
    if(userGuessNumber == randomNumber){
        lowHigh.textContent = ""; 
        wrongRight.textContent = "Congratulations! You got it right!";
        wrongRight.classList.remove("bg-danger");
        wrongRight.classList.add("bg-success"); 
        newGame.classList.remove("d-none");
        submitButton.setAttribute("disabled","disabled");
        guessNumber.setAttribute("readonly","readonly");
        return;
    }
    else if(userGuessNumber >  randomNumber){
        lowHigh.textContent = "Last guess was too high !";
        wrongRight.textContent = "Wrong!";
    }
    else if(userGuessNumber <  randomNumber){
        lowHigh.textContent = "Last guess was too low !";
        wrongRight.textContent = "Wrong!";
    }

    if( count === 10){
        guessNumber.setAttribute("readonly","readonly");
        submitButton.setAttribute("disabled","disabled");
        wrongRight.textContent = "!!!GAME OVER!!!";
        lowHigh.textContent = "";
        newGame.classList.remove("d-none");
        return;
    }
});
//end here result show on the submit button click

//start new game
newGame.addEventListener('click' ,function(){
    genRandomNumber();
    wrongRight.textContent = "";
    wrongRight.classList.remove("p-2");
    wrongRight.classList.add("bg-danger");
    previousGuess.textContent = "";
    previousNumber ="";
    newGame.classList.add("d-none");
    guessNumber.value = "";
    submitButton.removeAttribute("disabled","disabled");
    guessNumber.removeAttribute("readonly","readonly");  
});
//end here start new game