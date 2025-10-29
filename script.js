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

    
    result.textContent = `You: ${humanScore}   vs.   Computer: ${computerScore}`;

    
}
const result = document.querySelector(".result-container");
let game = 0;
//clicking a button triggers a round to be played
//get node list of buttons,  
const btns = document.querySelectorAll(".game-button");
//add an event listerner to each and display the target's text content when clicked
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        playRound(event.target.textContent, getComputerChoice());
        game++;
        if (game == 5){
            humanScore > computerScore ? alert("You win!") : alert("Computer wins!");
            game = 0;
            result.textContent = ``;
        }
    });
});
