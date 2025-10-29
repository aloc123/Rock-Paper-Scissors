let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //math.random generates 0 to 1, if I multiply to 3, I generate 0 to 3, but if i get its floor i get 0 to 2
    let compChoiceInt = Math.floor(Math.random() * 3);
    let compChoiceStr;
    switch(compChoiceInt){
        case 0:
            compChoiceStr = `rock`;
            break;
        case 1:
            compChoiceStr = `paper`;
            break;
        case 2:
            compChoiceStr = `scissor`;
            break;
    }
    console.log(`Computer's choice: ${compChoiceStr}`);
    return compChoiceStr;
}

function getHumanChoice() {
    //get the user input using prompt and return it
    return prompt("Rock, Paper, or Scissors?");
}


function playRound(humanChoice, computerChoice) {
    //convert to lowercase for case insensitivity
    let humanChoiceComp = humanChoice.toLowerCase();
    let computerChoiceComp = computerChoice.toLowerCase();
    //brute force, use an if else statement
    if (humanChoiceComp == computerChoiceComp){
        //its a tie
        //prints announcement and dont add to score
        alert(`It's a tie!`);
    }
    else{
        if (humanChoiceComp == 'rock'){
            if (computerChoiceComp == 'paper'){
                //human lose, Paper beats Rock!
                computerScore++;
                alert('You lose! Paper beats Rock!');
            }
            else if (computerChoiceComp == 'scissor'){
                //human win!
                humanScore++;
                alert('You win! Rock beats Scissor!');
            }
        }
        else if (humanChoiceComp == 'paper'){
            if (computerChoiceComp == 'scissor'){
                //human lose :(
                computerScore++;
                alert('You lose! Scissor beats Paper!');
            }
            else if (computerChoiceComp == 'rock'){
                //human win!
                humanScore++;
                alert('You win! Paper beats Rock!');
            }
        }
        else if (humanChoiceComp == 'scissor' || humanChoiceComp == 'scissors'){
            if (computerChoiceComp == 'rock'){
                //human lose :(
                computerScore++;
                alert('You lose! Rock beats Scissor!');
            }
            else if (computerChoiceComp == 'paper'){
                //human win!
                humanScore++;
                alert('You win! Scissor beats Paper!');
            }
        }
    }
}
/*
function playGame(){
//playRound while number of games < 5,
//every round generate computer choice and get human choice, and then change the scores appropriately
//when a score == 3, alert on who wins, then reset the scores to zero!
    alert(`Let's play Rock-Paper-Scissors!`);
    let numGames = 0;

    while (numGames < 5){
        playRound(getHumanChoice(), getComputerChoice());
        numGames++;
        console.log(`Human: ${humanScore}   Computer: ${computerScore}`);
    }
    if (humanScore>computerScore){
        alert(`YOU WIN!!!`);
    }
    else if (humanScore == computerScore){
        alert(`ITS A TIE!`)

    }
    else {
        alert(`You lost :(`);
    }
    humanScore = 0;
    computerScore = 0;
}*/

let playChoice = prompt(`Do you want to play a game? [Y/N]`);
while (playChoice == `Y`){
    playRound(getHumanChoice(), getComputerChoice());
    playChoice = prompt(`Do you want to play a game? [Y/N]`);
}
