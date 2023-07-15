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

const createCalculator = function createCalculatorButtons() {
    const calcBtnsEl = document.getElementById('calculator-buttons');
    const buttonSymbols = [
        ['←', 'ce', 'c', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['±', '0', '.', '=']
    ]

    let buttons = [];

    buttonSymbols.forEach(row => {
        const buttonsRowEl = document.createElement('div');
        buttonsRowEl.classList.add('btn-row');
        row.forEach(symbol => {
            const buttonEl = document.createElement('button');
            buttonEl.textContent = symbol;
            buttonEl.classList.add('btn');
            buttonsRowEl.appendChild(buttonEl);
            buttons.push(buttonEl);
        })

        calcBtnsEl.appendChild(buttonsRowEl);
    });
}


const calculator = function calculatorController() {
    let firstNum = null;
    let secondNum = null;
    let operator = null;

    createCalculator();
}

calculator();