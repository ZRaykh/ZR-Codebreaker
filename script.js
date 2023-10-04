function intitalize()
{
    inputDisplay = document.getElementById("guess");
    guessesDisplay = document.getElementById("clock");
    winlossDisplay = document.getElementById("win");
    reset();
    update();
}

function reset()
{
    const firstNumber = Math.floor((Math.random() * 3) +1 );
    const secondNumber = Math.floor((Math.random() * 3) +1 );
    const thirdNumber = Math.floor((Math.random() * 3) +1 );
    code = firstNumber + "" +  secondNumber + "" + thirdNumber;
    console.log(code)
    yourCode = "";
    turns = 7;
}

function addOne()
{
    yourCode = yourCode + "1"; 
    update();
}

function addTwo()
{
    yourCode = yourCode + "2";
    update();
}

function addThree()
{
    yourCode = yourCode + "3";
    console.log("Detected 3!");
    update();
}

function blank()
{
    yourCode = "";
    console.log("Detected Clear!");
    update();
}

function update()
{
    inputDisplay.innerHTML = "_ _ _";
    if(yourCode.length == 1)
    {
        inputDisplay.innerHTML = yourCode + " _ _";
    }
    if(yourCode.length == 2)
    {
        inputDisplay.innerHTML = yourCode + " _";
    }
    if(yourCode.length == 3)
    {
        if (yourCode == code)
        {
            winlossDisplay.innerHTML = "Congradulations, you guessed the last code!";
            reset();
        }
        turns = turns - 1;
        if (turns < 1)
        {
            winlossDisplay.innerHTML = "You failed to guess the last code! Maybe you'll do better this time!";
            reset();
        }
        yourCode = "";
    }
    guessesDisplay.innerHTML = "Turns remaining: " + turns;
}