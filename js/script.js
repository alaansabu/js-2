let firstcard = 11;
let secondcard = 10;
let card = [firstcard, secondcard];

let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let message;

function render() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " ";
    }

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
    messageEl.textContent = message;
}

function newcard() {
    console.log("Selecting a new card");
    let newcard = 5;
    sum += newcard;
    card.push(newcard); 
    render(); 
}

function start() {
    render(); 
}
