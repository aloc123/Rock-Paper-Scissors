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
    return compChoiceStr;
}

function getHumanChoice() {
    //get the user input using prompt and return it
    return prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

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
        else if (humanChoiceComp == 'scissor'){
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
    console.log(`Human: ${humanScore}   Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`Computer's choice: ${computerSelection}`);

playRound(humanSelection, computerSelection);