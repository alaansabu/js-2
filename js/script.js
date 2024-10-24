let firstcard = 11;
let secondcard = 10;
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let message;

function start() {
    if (sum < 21) {
        message = "Do you want to pick a new card?";
    } else if (sum === 21) {
        message = "Yay! You have won Blackjack!";
        hasBlackjack = true;
    } else if (sum > 21) {
        message = "You lost! Try again.";
        isAlive = false;
    }

    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstcard + " " + secondcard;
    messageEl.textContent = message;
}

function newcard() {
    console.log("Selecting a new card");
    let newcard = 5; 
    sum += newcard;

    message = "New card drawn!";

    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstcard + " " + secondcard + " " + newcard;
    messageEl.textContent = message;
}
