var prompt = require("prompt");
prompt.start();

var Word = require("./word.js");
// var games = require("./games.js");

var game = {
  wordBank: ["coding","javascript","constructor","node", "react"],
  guessesRemaining : 10,
  currentWrd : null,
  startGame : function(wrd){
    var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    console.log(randomWord); // Comment out after testing
    this.currentWrd = new Word(randomWord);
    this.currentWrd.getBlankSpaces();
    this.keepPrompting();
  },

  keepPrompting: function() {
    prompt.get(["guessLetter"], function(err, result) {
      console.log("The Letter you guessed is : "+result.guessLetter);
      var letterFound =game.currentWrd.checkIfLetterFound(result.guessLetter);

      console.log("Guess"+letterFound);
      // console.log(game.currentWrd.lets,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      if(!letterFound) {
        console.log("Your Guessed Wrong~!");
        game.guessesRemaining -= 1;
        if(game.guessesRemaining == 0) {
          return;
        }

        game.keepPrompting();
      } else {
        game.guessesRemaining -= 1;
        console.log("You guessed right!");
        if (game.currentWrd.didWeFindTheWord()) {
          console.log("You Won!!!");
          return;
        }else {
          console.log("Guesses remaining:"+ game.guessesRemaining);
          console.log(game.currentWrd.wordRender());
          if (game.guessesRemaining > 0){
            game.keepPrompting();
          } else {
            if (game.guessesRemaining === 0){
              console.log("Game Over Bro");
              console.log("The word you were guessing was:"+game.randomWord);
            }else {
              console.log(game.currentWrd.wordRender());
            }
          }
        }
      }
    });
  }
}
game.startGame();
