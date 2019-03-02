var WORDS = [
	"javascript",
	"hangman",
	"code",
	"games"
];

var word="";
var answerArray = [];
function init(){
   word = WORDS[Math.floor(Math.random() * WORDS.length)];
   answerArray = [];
   for (var i = 0; i < word.length; i++) {
     answerArray[i] = "_";
   }
   document.getElementById("answer").innerHTML= answerArray.join(" ");
   document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
 }
 init();
 function guessOne() {
   var guess = document.getElementById("guess").value;
   var showThisMessage = "";

 if (guess.length !== 1) {
     showThisMessage ="Please enter only a single letter";
 } else {
       var i=0; 
       for (i = 0; i < word.length; i++) {
           if (word[i] === guess) {
               answerArray[i] = guess;
               showThisMessage = "YES! "+guess+" is in the answer";
           }
       }

       var remaining_letters = answerArray.length;
       for (i = 0; i < answerArray.length; i++) {
           if (answerArray[i] !== '_') {
               remaining_letters -= 1;
           }
       }
       if (remaining_letters == 0) {
           showThisMessage = "YES! You guessed the word";
       }
       if (showThisMessage === "") {
           showThisMessage = "Sorry, no "+guess;
       }

       document.getElementById("answer").innerHTML = answerArray.join(" ");

       document.getElementById("guess").value = "";
 }
 document.getElementById("message").innerHTML = showThisMessage;
}
function quit() {
	document.getElementById("message").innerHTML = "The word was "+word;
	for (var j = 0; j < word.length; j++) {
		answerArray[j] = word[j];
	}
	// Solve the puzzle
	document.getElementById("answer").innerHTML = answerArray.join(" ");
}