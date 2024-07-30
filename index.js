let firstCard = 10;
let secondCard= 12;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!");
    hasBlackJack = true;
} else if (sum > 21) {
    console.log("You're out of the game!")
    isAlive = false;
}

console.log(isAlive)