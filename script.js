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

let getPlayerChoice = () => {
    let rpsPlayerChoice;
    let playerChoiceLower;      //Case insensitive input
    let inputChecker = true;    //Form Validation for input
    while (inputChecker){       //Loop until valid input
        rpsPlayerChoice = prompt('Please choose: Rock, Paper, or Scissors')
        playerChoiceLower = rpsPlayerChoice.toLowerCase();
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
    //Assuming 9 Scenarios
    //3 win conditions, 3 Draws, 
    //We'll denote Rock as r, Paper as p, and Scissors as s.
    //R > S > P > R or
    //X | R    | P    | S
    //R |      | Lose | Win
    //P | Win  |      | Lose
    //S | Lose | Win  |  
    //if playerGuess === cpuGuess | Draw Replay round | Remove 3 conditions
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
    let playerWins = 0;
    let cpuWins = 0;
    for (let i = 0; i <= 5; i++){
        let roundWinner = rpsRound(getPlayerChoice(),getComputerChoice());
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