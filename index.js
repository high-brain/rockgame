let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();
 
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/ 


let isAutoPlaying = false;
let setIntervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    setIntervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;
  }else{
    clearInterval(setIntervalId);
    isAutoPlaying = false;
  } 
}
function autoPlay2() {
  const buttonElement = document.querySelector
    ('.js-button');
   if (buttonElement.innerText === 'Auto Play') {
      buttonElement.innerHTML = 'Stop Auto Play';
   }else {
    buttonElement.innerHTML = 'Auto Play';
   }
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();

let result = '';
 
if (playerMove === 'scissors') {
  if (computerMove === 'rock'){
      result = 'You lose.';
  }else if (computerMove === 'paper'){
    result = 'You win.';
  }else if (computerMove === 'scissors'){
    result = 'Tie.';
  }

  }else if (playerMove === 'paper'){
      if (computerMove === 'rock'){
        result = 'You win.';
      }else if (computerMove === 'paper'){
        result = 'Tie.';
      }else if (computerMove === 'scissors'){
        result = 'You lose.';
      }

  }else if (playerMove === 'rock') {
    if (computerMove === 'rock'){
    result = 'You win.';
  }else if (computerMove === 'paper'){
    result = 'Tie.';
  }else if (computerMove === 'scissors'){
    result = 'You lose.';
  }
  }

  if(result === 'You win.'){
    score.wins += 1;
  }else if (result === 'You lose.'){
    score.losses += 1;
  }else if (result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')  
    .innerHTML = 
  `You  
      <img src="/image/${playerMove}.png" 
      class="moves-icon">
      <img  src="/image/${computerMove}.png" 
      class="moves-icon">
  Computer`;

/*
alert(`You picked ${playerMove}. 
 Computer picked ${computerMove}.${result} 
 Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.
ties}`);
*/
 } 
 
 function updateScoreElement() {
  
document.querySelector('.js-score')
.innerHTML =  `Wins: ${score.wins},
Losses: ${score.losses}, 
Ties: ${score.ties}`;
 }

    function pickComputerMove(){
      const randomNumber = Math.random();
  
 let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 
  1 / 3) {
    computerMove = 'rock';
  }else if (randomNumber >= 1 / 3 && 
  randomNumber < 2 / 3){
    computerMove = 'paper';
  }else if (randomNumber >= 2 / 3 &&
  randomNumber < 1) {
    computerMove = 'scissors';
  }
    return computerMove;
  }
