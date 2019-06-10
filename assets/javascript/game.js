//define vars for gameplay

var wins = 0;
var losses = 0;
guessremain = 9;
var wordarray = ["dog", "cat", "mouse", "bird"]
var mysterywordzone = [];
var userchoicelist = [];
var userchoice;
var computerchoice;
var computerchoicesplit = [];
var blanksarray = [];


//functions
var gameset = function () {
    console.log("IN RESET")
    document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist;
    guessremain = 9;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessremaining").innerHTML = "Guesses Remaining: " + guessremain;
    console.log("Game begin or reset.");
    comppicknew();
    //userGuesses.empty();
    console.log("USER GUESS BELOW")
    console.log(userGuesses)
    userGuesses =  "You have guessed: " + userchoicelist;
    document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist;

}

// computer pick a word and display blanks
var comppicknew = function () {
    computerchoice = wordarray[Math.floor(Math.random() * wordarray.length)];
    console.log("Computer choice is: " + computerchoice);
    computerchoicesplit = computerchoice.split("")
    for (var i= 0; i<computerchoicesplit.length; i++){
        blanksarray.push(" _ ");
        document.getElementById("mysteryword").innerHTML = blanksarray.join(" ");
}
}

//define keystoke from user as userchoice
document.onkeyup = function (event) {
    guessremain--;
    userchoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userchoice);
    userchoicelist.push(userchoice);
    console.log(userchoicelist);
    document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist.join(" ");
}

// check to see if user guess is in the mysteryword
for (var i= 0; i<computerchoicesplit.length; i++){
    if(userchoice==computerchoicesplit[i]){
    alert("you got a letter correct!")    }
  }

//initialize first computer choice and show scores
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessremaining").innerHTML = "Guesses Remaining: " + guessremain;

comppicknew();