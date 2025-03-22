//declaring variable
var randomloc = Math.floor(Math.random() * 5)

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//Game logic

while (isSunk == false) {
    guess = prompt("Ready!, Aim!, FIRE!(enter number 0-6)")


    if (guess == null) {
        alert("Weakshit!🤮");
        break;
    }


    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert("Hit!")

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!🛳️")
            }
        } else {
            alert("Miss!")
        }
    }
}
