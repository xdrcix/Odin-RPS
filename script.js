//Grab a random value between 1-3
let getComputerChoice = () => {
    let rpsCpuChoice = Math.floor((Math.random() * 3)) + 1;
    console.log(`Rolled number: %s`, rpsCpuChoice);
    if (rpsCpuChoice === 1)        //convert to string
        return("rock");
    else if (rpsCpuChoice === 2)
        return("paper");
    else if (rpsCpuChoice === 3)
        return ("scissors");
}

let getPlayerChoice = (playerChoiceLower) => {
    let rpsPlayerChoice;
    //Case insensitive input
    let inputChecker = true;   //Form Validation for input
    while (inputChecker){       //Loop until valid input
        //rpsPlayerChoice = prompt('Please choose: Rock, Paper, or Scissors')
        //playerChoiceLower = rpsPlayerChoice.toLowerCase();
        if (playerChoiceLower === 'rock')
            inputChecker = false;
        else if (playerChoiceLower == 'paper')
            inputChecker = false;
        else if (playerChoiceLower == 'scissors')
            inputChecker = false;
    }
    return playerChoiceLower;
}

let rpsRound = (playerGuess, cpuGuess) => {
    console.log('Player Chose: %s | Computer Chose: %s', playerGuess, cpuGuess);

    if (playerGuess === cpuGuess){
        return ('You forced a Draw!');
    }
    else if (playerGuess === 'rock' && cpuGuess === 'scissors'){
        return ('You Win ! Rock beats Scissors ');
    }
    else if ((playerGuess === 'rock' && cpuGuess === 'paper')){
        return ('You Lose ! Paper beats Rock ');
    }
    else if ((playerGuess === 'paper' && cpuGuess === 'rock')){
        return ('You Win ! Paper beats Rock ');
    }
    else if ((playerGuess === 'paper' && cpuGuess === 'scissors')){
        return ('You Lose ! Scissors beats Paper ');
    }
    else if ((playerGuess === 'scissors' && cpuGuess === 'paper')){
        return ('You Win ! Scissors beats Paper ');
    }
    else if ((playerGuess === 'scissors' && cpuGuess === 'rock')){
        return ('You Lose ! Rock beats Scissors ');
    }
}


let game = () => {
    console.log('The game has started');
    let playerWins = 0;
    let cpuWins = 0;
    for (let i = 0; i <= 5; i++){
        
        let roundWinner = rpsRound(getPlayerChoice('rock'),getComputerChoice());
        let tallyWin = roundWinner.split('!')
        console.log(roundWinner);
        if (tallyWin[0] === 'You forced a Draw!'){
            console.log('Redo round:');
            i = i-1;
        }
        else if (tallyWin[0] === 'You Win '){
            playerWins++;
            console.log('Player: %s | Cpu: %s', playerWins, cpuWins);
        }
        else if (tallyWin[0] === 'You Lose '){
            cpuWins++;
            console.log('Player: %s | Cpu: %s', playerWins, cpuWins);
        }
    }

    if (playerWins > cpuWins){
        console.log('You have won !!!!');
        return("You have won !!!!");
    }   
    else{
        console.log('You lost D;');
        return('You lost D;');
    }
        

}

const gameBtn = document.querySelectorAll('button');

let playerWins = 0;
let cpuWins = 0;
let showText = 'Lets Play!'

const playerScoreEvent = document.querySelector('#player');
const playerScore = document.createElement('p');

const cpuScoreEvent = document.querySelector('#cpu');
const cpuScore = document.createElement('p');

const gameTextEvent = document.querySelector('#gameState');
const gameText = document.createElement('p');

gameBtn.forEach((button) => {
      
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target.classList[0]);
        if (e.target.classList[0] != 'clear'){

            if(playerWins < 5 && cpuWins < 5){  
                let roundWinner = rpsRound(getPlayerChoice(e.target.classList[0]), getComputerChoice());
                let tallyWin = roundWinner.split('!')
                showText = roundWinner;
                console.log(roundWinner);
                
                if (tallyWin[0] === 'You forced a Draw'){
                    console.log('Player: %s | Cpu: %s', playerWins, cpuWins);
                }
                else if (tallyWin[0] === 'You Win '){
                    playerWins++;
                    console.log('Player: %s | Cpu: %s', playerWins, cpuWins);
                }
                else if (tallyWin[0] === 'You Lose '){
                    cpuWins++;
                    console.log('Player: %s | Cpu: %s', playerWins, cpuWins);
                }

                if (playerWins === 5){
                    console.log('You have won !!!!');
                    showText = 'You have won !!!!';
                }   
                else if (cpuWins === 5){
                    console.log('You lost D;');
                    showText= 'You lost D;';
                }

            }
            else if (playerWins === 5 ){
                console.log('You have won !!!!');

            }   
            else if (cpuWins === 5){
                console.log('You lost D;');

            }
        }
        else {
            console.log('Clear scores');
            playerWins = 0; 
            cpuWins = 0;
            showText = 'Lets Play!'
        }

        playerScore.textContent = `${playerWins}`;
        cpuScore.textContent = `${cpuWins}`;
        gameText.textContent = `${showText}`;

    });
    
});


playerScore.classList.add('playerScore');
cpuScore.classList.add('cpuScore');
gameText.classList.add('gameText')

playerScore.textContent = `${playerWins}`;
cpuScore.textContent = `${cpuWins}`;
gameText.textContent = `${showText}`;

playerScoreEvent.appendChild(playerScore);
cpuScoreEvent.appendChild(cpuScore);
gameTextEvent.appendChild(gameText);
