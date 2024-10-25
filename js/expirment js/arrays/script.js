let message= ["my name is alan sabu","been good how is your day","nothing","fuck oof","assholes","billy butcher"]
let greetingEl=document.getElementById("greeting-el")

for(let i=0;i<message.length;i++){

    greetingEl.textContent+=message[i]
}