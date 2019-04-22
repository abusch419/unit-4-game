

var counter = 0;
let wins = 0;
let losses = 0;
let targetNumber = 0;

$(document).ready(function () {

    // generate random number and write to the random number div 


    function resetTargetNumber() {
        targetNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        $("#random-number").text(targetNumber);
    }

    resetTargetNumber();

    function resetCrystalValues() {
        //   set random value for crystal one 
        let crystalOne = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        $("#crystalOne").attr("data-number", crystalOne);
        //   set random value for crystal two
        let crystalTwo = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        $("#crystalTwo").attr("data-number", crystalTwo);
        //   set random value for crystal three
        let crystalThree = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        $("#crystalThree").attr("data-number", crystalThree);
        //   set random value for crystal four
        let crystalFour = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        $("#crystalFour").attr("data-number", crystalFour);
    }

    resetCrystalValues();

    // write a set counter function 

    function setCounter(newCounter) {
        counter = newCounter;
        $("#score-counter").text(counter);
    }

    // write a game reset function 

    function resetGame() {
        resetCrystalValues();
        resetTargetNumber();
        setCounter(0);
    }

    function incrementWins() {
        wins++;
        $("#win-counter").text(wins);
    }

    function incrementLosses() {
        losses++;
        $("#loss-counter").text(losses);
    }

    // create function to add points to counter with each crystal click and determine a win vs a loss

    $(".crystal-image").on("click", function () {

        var crystalPoints = ($(this).attr("data-number"));
        crystalPoints = parseInt(crystalPoints);
        setCounter(counter + crystalPoints);
        console.log("Click!");



        if (counter > targetNumber) {
            incrementLosses();
            $("#outcome").text("You Lost!");
            console.log("You lost!")
            resetGame();


        } else if (counter === targetNumber) {
            incrementWins();
            $("#outcome").text("You Won!");
            resetGame();

        }

    });
})



