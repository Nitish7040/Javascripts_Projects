console.log("Project 4 guess the number :-");


let randomNumber = ( parseInt(Math.random()*100+1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =[];
let numGuess =1 ;

let playGame =true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess= parseInt(userInput.value);
       console.log(guess);
       validateGuess(guess)
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            remaning.innerHTML = '0'; // Show 0 when guess limit is reached
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}



function checkGuess(guess){
// 
if(guess === randomNumber){
    displayMessage(`<p class="msg0">🎉🥳You guessed it right🥳🎉 </p>`)
    endGame()
}else if(guess < randomNumber){
    displayMessage(`<p class="msg">🙂Number is to low🙂</p>`)
}else if(guess > randomNumber){
    displayMessage(`<p class="msg">😓Number is to high😓</p>`)
}

}

function displayGuess(guess){
//

userInput.value = '';
guessSlot.innerHTML = `${guess}`;
numGuess++;
remaning.innerHTML = `${11 - numGuess}`;
}


function displayMessage(Message){
//
lowOrHi.innerHTML += `<h2>${Message}</h2>`

}

function endGame(){
//
userInput.value =''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<button id="newgame">start new game</button>';
startOver.appendChild(p)
playGame = false
newGame()

}

function newGame (){
    //
const newGameButton = document.querySelector('#newgame')
newGameButton.addEventListener('click',function(e){
  randomNumber = ( parseInt(Math.random()*100+1));
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML =''
  remaning.innerHTML =`${11- numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p);
  lowOrHi.innerHTML = ''; 
  playGame = true;
})
}
function displayMessage(message) {
    // Clear any existing message before displaying a new one
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

    // Clear the message after 2 seconds
    setTimeout(() => {
        lowOrHi.innerHTML = '';
    }, 8000);
}
