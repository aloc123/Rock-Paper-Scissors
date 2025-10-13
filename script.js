console.log('Hello World again');

function getComputerChoice() {
    //math.random generates 0 to 1, if I multiply to 3, I generate 0 to 3, but if i get its floor i get 0 to 2
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());