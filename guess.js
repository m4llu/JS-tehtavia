function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (userGuess === randomNumber) {
        document.getElementById("answer").innerHTML = "Hyvä työ!";
    } else {
        document.getElementById("answer").innerHTML = "Ei täsmää, oikea numero oli " + randomNumber;
    }
}