function checkDigits() {
    var inputNumber = document.getElementById("numberInput").value;
    var numberString = inputNumber.toString();
    var allSame = numberString.split('').every(function (digit) {
        return digit === numberString[0];
    });
    var resultElement = document.getElementById("numCheckerResult");
    resultElement.textContent = allSame ? "All digits are the same!" : "Digits are not the same.";
    resultElement.style.color = allSame ? "green" : "red";
}