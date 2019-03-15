
//List of names of Dingo Pictures characters
var dingoCharacters = ["Tio", "Peak", "Wabu", "Robin", "Lucy" ];
var rand = dingoCharacters[Math.floor(Math.random() * dingoCharacters.length)];
console.log(rand)
//Displays guesses left
var guessesLeft = 6;
document.getElementById("guesses-left").innerHTML = guessesLeft;
//Displays Wins
var myWins = 0;
document.getElementById("wins").innerHTML = myWins;

//Makes empty array to be filled
var guessedArray = [];
//Displays letters guessed
document.getElementById("letters-guessed").innerHTML = guessedArray;

var progressWord = [];
//replace letters in mystery word with underscores
for (i = 0; i < rand.length; i++) {
progressWord.push("__");
}
//Switching the underscores on the screen
document.getElementById("underscores").innerHTML = progressWord.join(" ");
//keypress event
//document.getElementById("letterBox").addEventListener("keypress", processLetter());

function processLetter() {
        var letter = document.getElementById("letterBox");

    
        //Check if letter is in the word
        function letterInWord(letter) {
        
        var positions = 0;
        for (i = 0 ; i < rand.length; i++) {
            if (rand[i] === letter)
                positions = i;
        }

        
        return positions;
        
        }

        letterInWord(letter);
        guessedArray[positions] = letter; 
        //Displays Guessed letters
        document.getElementById("letters-guessed").innerHTML = letterInWord(letter);

        if (rand.length == 0){
            myWins ++;
            document.getElementById("wins").innerHTML = myWins;
        }
        else if (guessesLeft == 0) {
            alert("You Lose!")
        }

        //Need to make game reset with refresh, 
        
}
