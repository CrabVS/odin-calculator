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
    let result;
    switch (operator) {
        case '+':
            result = add(numOne, numTwo);
            break;
        case '-':
            result = subtract(numOne, numTwo);
            break;
        case '*':
            result = multiply(numOne, numTwo);
            break;
        case '/':
            result = divide(numOne, numTwo);
            break;
    }

    return +result.toFixed(6);
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

const updateWindow = function updateCalculatorWindow(newText) {
    const calculatorWindowEl = document.getElementById('calculator-window');

    if (newText !== null) {
        let newTextArray = newText.split('');
        newTextArray.splice(12);
        console.log(newTextArray);
    
        calculatorWindowEl.textContent = newTextArray.join('');
    }
}

const hasDecimal = function hasDecimal(num) {
    if (!isNaN(num) && num !== null) {
        let numArray = num.toString().split('');
        if (numArray.includes('.')) {
            return true;
        }
    } return false
}

const calculator = function calculatorController() {
    let firstNum = null;
    let secondNum = null;
    let operator = null;

    createCalculator();

    const buttons = [...document.querySelectorAll('.btn')];
    const calculatorWindowEl = document.getElementById('calculator-window');
    buttons.forEach(button => {
        button.addEventListener('click', () => {

            // Checks to see if the button is an operator
            if (['+', '-', '*', '/'].includes(button.textContent)) {
                if (shouldOperate(firstNum, secondNum, operator)) {
                    firstNum = operate(+firstNum, +secondNum, operator).toString();
                    secondNum = null;

                    updateWindow(firstNum);
                } else if (firstNum === null) {
                    firstNum = calculatorWindowEl.textContent;
                    secondNum = '';
                }
                operator = button.textContent;
            }
            
            // Checks to see if the button is a number
            else if (!isNaN(button.textContent)) {
                if (operator === null) {
                    if (firstNum === null) firstNum = '';
                    firstNum = `${firstNum}${button.textContent}`;
                    updateWindow(firstNum);
                } else {
                    if (secondNum === null) secondNum = '';
                    secondNum = `${secondNum}${button.textContent}`;
                    updateWindow(secondNum);
                }
            }

            // Checks to see if button is equal
            else if (button.textContent === '=') {
                if (shouldOperate(firstNum, secondNum, operator)) {
                    result = operate(+firstNum, +secondNum, operator).toString();
                    updateWindow(result);
                    firstNum = null;
                    secondNum = null;
                    operator = null;
                }
            }

            // Checks to see if button is +/-
            else if (button.textContent === '±') {
                if (operator === null) {
                    if (firstNum !== null && firstNum !== 0) {
                        firstNum *= -1;
                    }
                    updateWindow(firstNum);
                } else {
                    if (secondNum !== null && firstNum !== 0) {
                        secondNum *= -1;
                    }
                    updateWindow(secondNum);
                }
            }

            // Checks to see if button is decimal
            else if (button.textContent === '.') {
                if (operator === null && !hasDecimal(firstNum)) {
                    if (firstNum === null || firstNum === '') firstNum = '0';
                    firstNum = `${firstNum}${button.textContent}`;
                    updateWindow(firstNum);
                } else if (!hasDecimal(secondNum)) {
                    if (secondNum === null || secondNum === '') secondNum = '0';
                    secondNum = `${secondNum}${button.textContent}`;
                    updateWindow(secondNum);
                }
            }

            // Checks if button is clear and clear all
            else if (['ce', 'c'].includes(button.textContent)) {
                if (button.textContent === 'ce') {
                    if (secondNum !== null) {
                        secondNum = '';
                    } else {
                        firstNum = '';
                    }
                } else {
                    firstNum = null;
                    secondNum = null;
                    operator = null;
                }
                updateWindow('0');
            }

            // defaults to backspace
            else {
                if (secondNum !== null) {
                    if (secondNum !== '') {
                        let newNum = secondNum.split('');
                        newNum.pop();
                        secondNum = newNum.join('');
                        if (secondNum === '') {
                            secondNum = '';
                            updateWindow('0');
                        } else updateWindow(secondNum);
                    }
                } else if (firstNum !== null) {
                    if (firstNum !== '') {
                        let newNum = firstNum.split('');
                        newNum.pop();
                        firstNum = newNum.join('');
                        if (firstNum === '') {
                            firstNum = '';
                            updateWindow('0');
                        } else updateWindow(firstNum);
                    }
                }
            }
        });
    });
}

calculator();