// While the word has not been guessed {
//  Show the player their current progress
//  Get a guess from the player
//  If the player wants to quit the game {
//  Quit the game
//  }
//  Else If the guess is not a single letter {
//  Tell the player to pick a single letter
//  }
//  Else {
//  If the guess is in the word {
//  Update the player's progress with the guess
//  }
//  }
// }
// Congratulate the player on guessing the word


// var words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
//    ];

// var word = words[Math.floor(Math.random() * words.length)];
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }
// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess
//    }
//    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
// if (guess === null) {
//    break;
// }else if (guess.length !== 1) {
//  alert("Please enter a single letter.");
// } else {
//    for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//        answerArray[j] = guess;
//       remainingLetters--;
//        }
//       }
// }
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);

var words = [
   "javascript",
   "monkey",
   "amazing",
   "pancake"
   ];
   // Pick a random word
   var word = words[Math.floor(Math.random() * words.length)];
   // Set up the answer array
   var answerArray = [];
   for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
   }
   var remainingLetters = word.length;
   // The game loop
   while (remainingLetters > 0) {
   // Show the player their progress
   alert(answerArray.join(" "));
   // Get a guess from the player
   var guess = prompt("Guess a letter, or click Cancel to stop playing.");
   if (guess === null) {
   // Exit the game loop
   break;
   } else if (guess.length !== 1) {
   alert("Please enter a single letter.");
   } else {
   // Update the game state with the guess
   for (var j = 0; j < word.length; j++) {
   if (word[j] === guess) {
   answerArray[j] = guess;
   remainingLetters--;
   }
   }
   }
   // The end of the game loop
   }
   // Show the answer and congratulate the player
   alert(answerArray.join(" "));
   alert("Good job! The answer was " + word);