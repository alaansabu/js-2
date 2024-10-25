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
    // Display all cards from the array
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " ";
    }

    // Display message based on sum
    if (sum < 21) {
        message = "Do you want to pick a new card?";
    } else if (sum === 21) {
        message = "Yay! You have won Blackjack!";
        hasBlackjack = true;
    } else if (sum > 21) {
        message = "You lost! Try again.";
        isAlive = false;
    }

    // Update sum and message elements
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newcard() {
    console.log("Selecting a new card");
    let newcard = 5;
    sum += newcard;
    card.push(newcard); // Add new card to the array
    render(); // Re-render after adding the new card
}

function start() {
    render(); // Initial render when the game starts
}
