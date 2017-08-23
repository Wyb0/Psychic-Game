 // Variables for game
 var winNum = 0;
 var lossNum = 0;
 var guessNum = 5;
 //KeyEvent
 document.onkeyup = function(event) {
     var userGuess = event.key;
     //Computer chooses number 0-9
     var randomNum = Math.floor(Math.random() * 10);

         if (userGuess == randomNum) {
             winNum++;
         }
         if (guessNum !== randomNum) {
             guessNum = (guessNum -1);
         }
         if (guessNum == 0) {
             guessNum = 5; lossNum++;
         }

     var pageText =
     "<h1>Welcome to the Psychic Game! Guess a number 0-9 that the computer is thinking...</h1>" +
     "<p>Wins: " + winNum + "</p>" +
     "<p>Losses: " + lossNum + "</p>" +
     "<p>Guesses Left: " + guessNum + "</p>";
     //"<p>Guesses so far: " + <span id ="userInput"> + ", " + "</p>";

     document.querySelector("#game").innerHTML = pageText;

     //var userText = document.getElementById("userInput"); 
     
     //document.onkeyup = function(event) {
         //console.log(event);
         //userText.textContent = userText.textContent + event.key + ", ";
     //}
     
 }
