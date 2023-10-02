function intitalize()
{
    inputDisplay = document.getElementById("guess");
    guessesDisplay = document.getElementById("clock");
    reset();
    update();
}

function reset()
{
    const firstNumber = Math.floor((Math.random() * 3) +1 );
    const secondNumber = Math.floor((Math.random() * 3) +1 );
    const thirdNumber = Math.floor((Math.random() * 3) +1 );
    code = firstNumber + "" +  secondNumber + "" + thirdNumber;
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
    update();
}
function clear()
{
    yourCode = "";
    update();
}

function update()
{
    inputDisplay.innerHTML = "__ __ __ ";
    if(yourCode.length == 1)
    {
        inputDisplay.innerHTML = yourCode + "__ __";
    }
    if(yourCode.length == 2)
    {
        inputDisplay.innerHTML = yourCode + "__";
    }
    if(yourCode.length == 3)
    {
        if (yourCode == code)
        {
            
        }
        turns = turns - 1;
        yourCode = "";
    }
    guessesDisplay.innerHTML = "Turns remaining: " + turns;
}