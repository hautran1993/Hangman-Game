//word bank
var wordsToGuess = ["startrek", "battlestar galactica","doctor who"
                    ,"zygirion simulation","gazorpazorpfield", "pickle rick"]

//randomWord allows use for randomizing word
var randomWord =  wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
console.log(randomWord);

var misses = []
var correct= []
var wins = 0;
var loses = 0;
var answerArray =[]
var usersInput;

//looping random word and push "_"
for (var i = 0; i < randomWord.length; i++) { 
    answerArray.push("_");
}
//game starts after key is pressed
var userText = document.getElementById("user-text");
userText.textContent = answerArray;

//allow users to press keys
document.onkeyup = function(event) {
 userText.textContent=event.key
 usersInput = event.key;
 usersInput = usersInput.toLowerCase()


      if (misses.indexOf(usersInput) === -1 ) {
        misses.push(usersInput);
        console.log("whats this")
            //if the output is wrong while looking through the random array
            //allow the loop to run through nd collect all of the chracters in the word bank
        if( randomWord.indexOf(usersInput) > -1) {
        	console.log("this ran");
            console.log("good job");
            //loop through the random word length
        	for(var i=0 ; i < randomWord.length; i++) {
                // if users input is equall to randomword length
			    if( usersInput === randomWord[i]) {
			    	console.log("running check loop");
                    console.log("good job");
                    //then input users answers in strings
			        answerArray[i] = usersInput;
                }
                //log in answer array to show it in console
			    console.log(answerArray);
			    
			}
        //for unvalid answers or repeating strings    
        } else {
        	console.log("sorry you guessed wrong");
        }
        
    //tell them to guess again  
    } else { 
        misses.push(usersInput);
        //need to set this to 10 some how and end game
        console.log("wrong guess or repeatin guess");
    }

};