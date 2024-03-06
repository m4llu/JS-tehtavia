const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const resultElement = document.getElementById('result');

multiplyBtn.addEventListener('click', function() {
    const firstNumber = parseFloat(firstInput.value);
    const secondNumber = parseFloat(secondInput.value);
    const result = firstNumber * secondNumber;
    
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        resultElement.innerHTML = `Result: ${result}`;
    }
    else {
        resultElement.textContent = "Please enter valid numbers";
    }
});

divideBtn.addEventListener('click', function() {
    const firstNumber = parseFloat(firstInput.value);
    const secondNumber = parseFloat(secondInput.value);
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        if (secondNumber !== 0) {
            const result = firstNumber / secondNumber;
            resultElement.textContent = `Result: ${result}`;
        } else {
            resultElement.textContent = "Cannot divide by zero";
        }
    } else {
        resultElement.textContent = "Please enter valid numbers";
    }

});