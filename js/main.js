// Global Variables
let pChoice;
let cChoice;
let playerWin = '';
let playOptions = ['rock', 'paper', 'scissors'];

// DOM's
let buttonDiv = document.querySelector('.buttons');
let resultText = document.querySelector('.results h2');
let cChoiceText = document.querySelector('#cChoice');

// functions
let compuChoice = function () {
    cChoice = Math.floor(Math.random() * 3); 
    checkForWin();
}

let displayResults = function () {
    resultText.textContent = playerWin;
    cChoiceText.textContent = cChoice;
}

// compare function
let checkForWin = function () {
    if (pChoice !== cChoice) {
        switch(pChoice) {
            case 0:
                playerWin = cChoice === 1 ? 'you lose' : 'you win';
                break;        
            case 1:
                playerWin = cChoice === 2 ? 'you lose' : 'you win';  
                break;
            case 2:
                playerWin = cChoice === 0 ? 'you lose' : 'you win';
                break;       
        }
    } else { 
    playerWin = 'tie';  
    }
    displayResults();
}

// Event handlers
buttonDiv.addEventListener('click', function(event) {
    event.stopPropagation();
    pChoice = parseInt(event.target.id);
    console.log(pChoice);

    // allow computer to choose
    compuChoice();
})

// computer will choose rock paper or scissors
    // generate number
    // use index    


// compare computer choice and player choice
// make a function check

// display results
// color the button chosen by the player
// disable the other two buttons
// display the computer choice
// add the relevant image
// display results