let currentOperand = '';
let previousOperand = '';
let operation = null;
const display = document.getElementById('display');

function appendNumber(number) {
    if (currentOperand === '' && number === '.') {
        currentOperand = '0';
    }
    currentOperand += number;
    updateDisplay();
}

function appendParenthesis(parenthesis) {
    if (currentOperand === '') currentOperand = '';
    currentOperand += parenthesis;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '' && previousOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op === '/' ? '÷' : op === '*' ? '×' : op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            computation = current !== 0 ? prev / current : "Error";
            break;
        default:
            return;
    }

    currentOperand = computation.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function calculatePercentage() {
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    display.value = previousOperand + (operation || '') + currentOperand;
}

function allClear() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}