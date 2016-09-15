var letter = require("./letter.js");

function Word(wrd){
    this.word = wrd;
    this.lets = []; //the actual hangman visualization
    this.found = false;

    this.getBlankSpaces = function(){
      //initialization. takes all of the letters in this.word and calls newLet.letterRender() and getting '_'(blank space) for all of the letters in the word.
      //loop through the random word. pushing th e
      for (var i=0; i <this.word.length; i++){
        var newLet = new letter(this.word[i]);
        this.lets.push(newLet.spaceRender()); //Creates each letter object
      }
      console.log(this.lets);
    }

    this.checkIfLetterFound = function(guessLetter){
      var found = false;
      for (var i=0; i <this.lets.length; i++){
        if(this.word[i] === guessLetter) {
          // this.lets[i].appear = true;
          this.lets[i] = guessLetter;
          found = true;
        }
      }
      return found;
    }
//if this.word = 'node'
//if this.lets = ['n','o','d','_']
    this.didWeFindTheWord = function(){
      if(this.lets.join('') == this.word){
        console.log('we found the word',this.lets.join(''), this.word);
        return true;
      }else{
        console.log('we didnt find the word',this.lets.join(''), this.word);
        return false;
      }
    }

    this.wordRender = function(){
      return this.lets.join(',');
    }
}
// var test = new Word('test');
// var x = test.getLets('test');
// var y = test.checkIfLetterFound("t");

module.exports = Word;
