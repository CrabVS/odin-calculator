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
            return add(numOne, numTwo);
        case '-':
            return subtract(numOne, numTwo);
        case '*':
            return multiply(numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
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

const shouldOperate = function shouldOperate(numOne, numTwo, operator) {
    if (numOne === null || numTwo === null || operator === null) {
        return false;
    } return true;
}

const calculator = function calculatorController() {
    const calculatorWindowEl = document.getElementById('calculator-window');
    let firstNum = null;
    let secondNum = null;
    let operator = null;

    createCalculator();
    const buttons = [...document.querySelectorAll('.btn')];
    buttons.forEach(button => {
        button.addEventListener('click', () => {

            if (['+', '-', '*', '/'].includes(button.textContent)) {
                if (shouldOperate(firstNum, secondNum, operator)) {
                    firstNum = operate(+firstNum, +secondNum, operator).toString();
                    secondNum = null;

                    console.log(firstNum);
                }
                operator = button.textContent;
            }
            
            else if (!isNaN(button.textContent)) {
                if (operator === null) {
                    if (firstNum === null) firstNum = '';
                    firstNum = `${firstNum}${button.textContent}`;
                } else {
                    if (secondNum === null) secondNum = '';
                    secondNum = `${secondNum}${button.textContent}`;
                }
                console.log(firstNum);
                console.log(secondNum);
            }
        });
    });
}

calculator();