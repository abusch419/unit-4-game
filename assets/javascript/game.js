$(document).ready(function () {

    $(".game-div").hide()
    var counter = 0;
    let wins = 0;
    let losses = 0;
    let targetNumber = 0;





    $(".start-game").on("click", function (e) {
        e.preventDefault()
        $(".game-div").show()
        hideInstructions()
        renderGame()
        resetTargetNumber()
        resetCrystalValues()
        PlayGame()
    })

    function PlayGame() {
        $(".crystal-image").on("click", function () {

            var crystalPoints = ($(this).attr("data-number"));
            crystalPoints = parseInt(crystalPoints);
            setCounter(counter + crystalPoints);
            console.log("Click!");


            $("#outcome").empty()
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

        })
    }




    // generate random number and write to the random number div 

    function hideInstructions() {
        $(".instructions").hide()
    }

    function renderGame() {
        $(".game-div").empty()
        console.log("renderGame")
        let game =
        `
            <div class="game row">
            <h1 class="col-12" id="target-number">Target Number</h1>
            <h3 class="col-12" id="random-number">
            </h3>
            <div class="col-12" id="crystal-images">
                <img class="crystal-image col-xs-6 col-sm-6 col-md-3" id="crystalOne" src="assets/images/crystal1.png" alt="crystal 1">
                <img class="crystal-image col-xs-6 col-sm-6 col-md-3" id="crystalTwo" src="assets/images/crystal2.png" alt="crystal 2">
                <img class="crystal-image col-xs-6 col-sm-6 col-md-3" id="crystalThree" src="assets/images/crystal3.png" alt="crystal 3">
                <img class="crystal-image col-xs-6 col-sm-6 col-md-3" id="crystalFour" src="assets/images/crystal4.png" alt="crystal 4">
            </div>
            <div class="col-6 card">
                    <div class="card-header">
                        Points
                    </div>
                    <div class="card-body" id="score-counter">
    
                    </div>
            </div>
            <div class="col-6 card">
                    <div class="card-header">
                        Score
                    </div>
                    <div class="card-body" id="wins-losses">
                        <p id="outcome"></p>
                        <p id="win-text">Wins:<span id="win-counter">0</span> </p>
                        <p id="loss-text">Losses:<span id="loss-counter">0</span> </p>
                    </div>
            </div>
        </div>
    
        `
        $(".game-div").append(game)
    }


    function resetTargetNumber() {
        targetNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        $("#random-number").text(targetNumber);
    }



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


})



