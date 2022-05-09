//query selectors
const display = document.querySelector('.display');
const clearBtn = document.querySelector('#AC');
const signBtn = document.querySelector('#sign');
const percentBtn = document.querySelector('#percent');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const equalsBtn = document.querySelector('#equals');
const decimalBtn = document.querySelector('#decimal');
const operand = document.querySelectorAll('.operand');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
//variables
let displayValue;
let otherValue;
let whichOperator;
let test = false;
let clickedOnce = false;
let equalsClicked = false;

//functions
//basic operators
const add = function(n1, n2){
    return n1 + n2;
};
const subtract = function(n1, n2){
    return n1 - n2;
};
const multiply = function(n1, n2){
    return n1 * n2;
};
const divide = function(n1, n2){
    return n1 / n2;
};
//passes operator function with two numbers
const operate = function(operator, n1, n2){
    return operator(n1, n2);
};
//0-9 digits
operand.forEach(element => element.addEventListener('click', () => {
    if(!test){
        if(!clickedOnce){
            display.textContent += element.innerHTML;
            displayValue = display.textContent;
        }
        else if(clickedOnce){
            display.textContent += element.innerHTML;
            otherValue = display.textContent; 
        }
    }   
}
));
//Add operator
plusBtn.addEventListener('click', () =>{
    if(!(otherValue > 0)){
        whichOperator = 'add';
        display.textContent = '';
        clickedOnce = true;
        if(test){
            test = false;
        }
    }
});
//equals operator
equalsBtn.addEventListener('click', () => {
    display.textContent = '';
    displayValue = operate(add, parseInt(displayValue), parseInt(otherValue));
    display.textContent = displayValue;
    otherValue = 0;
    clickedOnce = false;
    test = true;
});

//Two problems
//If I click plus before any digits, clickedOnce becomes true, making it impossible
// to give a value to displayValue (first val)
//Second problem
//if I click plus after typing a number to fill otherValue, it will just reset
//I'd prefer plus to be unclickable or result in running operate on the two values 