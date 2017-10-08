//word bank
var wordsToGuess = ["startrek", "battlestar", "galatica"
                    ,"zygirion","gazorpazorpfield", "picklerick","lubbadubdub","portals","interdemension"]

//randomWord allows use for randomizing word
var randomWord =  wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)].toLowerCase();
console.log(randomWord);
var guessesLeft = 10
var playerGuesses = []
var answerArray =[]
var underScore=[]
var wins = 0;
var usersInput;
var userText = document.getElementById("user-text");
var game = false;

//game start
function generateUnderscore (){
    for (var i = 0; i < randomWord.length; i++) { 
    answerArray.push('_');
        if (randomWord[i]===(" ")){
            answerArray[i]=" "
        }
    } 
    userText.textContent = answerArray.join(" ");
}
generateUnderscore()

function generateGame (){ 
    for(var i=0; i < randomWord.length; i++) {
        if( guessesLeft[i]=== playerGuesses){
        game=false;
        console.log("you lose")
        }    
    } 
}
generateGame()
//allow users to press keys
document.onkeyup = function(event) {

 usersInput = event.key;
 //all keys to lower case
 usersInput = usersInput.toLowerCase()


    //gets users guess
      if (playerGuesses.indexOf(usersInput) === -1 ) {
        console.log("will not log in answers twice");
            //if the output is wrong while looking through the random array
            //allow the loop to run through nd collect all of the chracters in the word bank
        if( randomWord.indexOf(usersInput) > -1) {
            console.log("goodjob right answer")
            //loop through the random word length
        	for(var i=0 ; i < randomWord.length; i++) {
                // if users input is equall to randomword length
			    if( usersInput === randomWord[i]) {
                    //then input users answers in strings
			        answerArray[i] = usersInput;
                    console.log("saves a string that gets closer to finishing(almost-1)");
                }
                //log in answer array to show it in console
			    userText.textContent= answerArray.join(" ");
			    
			}
        //for unvalid answers or repeating strings    
        } else {
            playerGuesses.push(usersInput);
            document.getElementById("alreadyGuessed").textContent = playerGuesses.join(" ")

        }
        
    //tell them to guess again  
    }

    //player wins if word is guessed correctly/why is it not working
    if(answerArray.join("") === randomWord){
          wins += 1;
          document.getElementById("wins").textContent = "wins:" + wins;
          console.log("goodjob you win")
        }else{
          lose+=1;
          document.getElementById("loses").textContent = "wins:" + lose;

    }

};

