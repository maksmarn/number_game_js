let counter = 0;
let secret = Math.floor(Math.random() * 100) + 1;
let message = document.getElementById("message");

var input = document.getElementById("guessNumber");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("confirmButton").click();
  }
});

function buttonFunction(){
    document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload()">New game</button>';
}

function guess() {
    let guessInt = parseInt(document.getElementById("guessNumber").value);

    if(guessInt === secret) {
        counter += 1;
        headerOne.textContent = "Congratulations!"
        document.getElementById("guessNumber").value = ""; 
        message.textContent = "Well done, you did it in " + counter + " tries.";
        document.getElementById("guessNumber").style.display = "none";
        document.getElementById("confirmButton").style.display = "none";
        document.getElementById("reminder").style.display = "none";
        buttonFunction();
    } else if(guessInt < secret) {
        counter += 1;
        document.getElementById("guessNumber").value = ""; 
        headerOne.textContent = "Keep going!"
        message.textContent = "Incorrect, try a higher number.";
        reminder.textContent = "It's between 1 and 100."
    } else if(guessInt > secret) {
        counter += 1;
        document.getElementById("guessNumber").value = ""; 
        headerOne.textContent = "Keep going!"
        message.textContent = "Incorrect, try a lower number.";
        reminder.textContent = "It's between 1 and 100."
    }
}
