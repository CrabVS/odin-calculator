const add = function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

const subtract = function subtractNumbers(numOne, numTwo) {
    return numOne - numTwo;
}

const multiply = function multiplyNumbers(numOne, numTwo) {
    return numOne * numTwo;
}

const divide = function addNumbers(numOne, numTwo) {
    return numOne / numTwo;
}

const operate = function operate(numOne, numTwo, operator) {
    switch (operator) {
        case '+':
            add(numOne, numTwo);
            break;

        case '-':
            subtract(numOne, numTwo);
            break;

        case '*':
            multiply(numOne, numTwo);
            break;

        case '/':
            divide(numOne, numTwo);
            break;
    }
}

const calculator = function calculatorController() {
    let firstNum = null;
    let secondNum = null;
    let operator = null;
}
