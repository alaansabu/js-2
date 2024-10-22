let firstcard =11;
let secondcard=10;
let sum= firstcard+secondcard;
hasBlackjack = false;
isAlive = true;
 let messageEl=document.getElementById("message-el") 
 let message;
 let sumEl=document.getElementById("sum-el")
 let cardEl=document.getElementById("card-el")
function start() {
    
if (sum < 21){
message="Do you want to pick a new card";
}

else if (sum === 21) {
    message = "Yay! You have won Blackjack!";
    hasBlackjack = true;
}


else if (sum >21){
    message="FUCK OFF "
    isAlive=false
}

sumEl.textContent="cards :"+ " "+firstcard+" "+secondcard;
cardEl.textContent="sum :"+ " "+sum
messageEl.textContent=message;
}