
let card = [];
let sum = 0
let hasBlackjack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let creditEl = document.getElementById("credit-el");
let message;
let playerName ="Alan";
let credit = 0;
creditEl.innerText= playerName+ ": "+ credit

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
    if (isAlive===true && hasBlackjack===false){
     


        console.log("Selecting a new card");
        let newcard = getRandomCard()
        sum += newcard;
        card.push(newcard); 
        render(); 

        
            
    }
   
    
    }
 


function start() {
    
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard()
    card = [firstCard,secondCard];
    sum= firstCard+secondCard;
    render(); 
}
function getRandomCard(){
    let mathPorblem = Math.floor(Math.random()*13)+1
    if (mathPorblem>10){
        return 10;
    }
    else  if (mathPorblem===1){
return 11   
}
else{
    return mathPorblem
}


}
