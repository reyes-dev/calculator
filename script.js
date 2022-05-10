//Project is technically finished, but needs some finishing touches
//Improve CSS
//Improve comments
//QUERY SELECTORS
const span = document.querySelector("#alarmmsg");
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
//VARIABLES
let displayValue;
let otherValue;
let whichOperator;
let equalsClicked = false;
let clickedOnce = false;
let operandClicked = false;
//FUNCTIONS
//Operator Functions
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
//Passes operator function with two numbers
const operate = function(operator, n1, n2){
    return operator(n1, n2);
};
//Resets the values of all variables used for the calculator logic to their origin state
//when called
function clearAll(){
    displayValue = undefined;
    otherValue = undefined;
    whichOperator = '';
    equalsClicked = false;
    clickedOnce = false;
    operandClicked = false;
    display.textContent = '';
}
//Clickability for digit numbers
operand.forEach(element => element.addEventListener('click', () => {
    if(display.textContent === 'To Infinity') return clearAll();
    operandClicked = true;
    if(!equalsClicked){
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
if(operandClicked){
    if(!(otherValue > 0)){
        whichOperator = 'add';
        display.textContent = '';
        clickedOnce = true;
        if(equalsClicked){
            equalsClicked = false;
        }
    }
}
});
//Minus operator
minusBtn.addEventListener('click', () =>{
    if(operandClicked){
        if(!(otherValue > 0)){
            whichOperator = 'subtract';
            display.textContent = '';
            clickedOnce = true;
            if(equalsClicked){
                equalsClicked = false;
            }
        }
    }
    });
//Multiply operator
divideBtn.addEventListener('click', () =>{
    if(operandClicked){
        if(!(otherValue > 0)){
            whichOperator = 'divide';
            display.textContent = '';
            clickedOnce = true;
            if(equalsClicked){
                equalsClicked = false;
            }
        }
    }
    });
//Division operator
multiplyBtn.addEventListener('click', () =>{
    if(operandClicked){
        if(!(otherValue > 0)){
            whichOperator = 'multiply';
            display.textContent = '';
            clickedOnce = true;
            if(equalsClicked){
                equalsClicked = false;
            }
        }
    }
    });
//equals operator
equalsBtn.addEventListener('click', () => {
    if(displayValue != undefined && otherValue != undefined){
        if(whichOperator === 'add'){
            display.textContent = '';
            displayValue = operate(add, parseInt(displayValue), parseInt(otherValue));
            display.textContent = displayValue;
            otherValue = undefined;
            clickedOnce = false;
            equalsClicked = true;            
        }
        else if(whichOperator === 'subtract'){
            display.textContent = '';
            displayValue= operate(subtract, parseInt(displayValue), parseInt(otherValue));
            display.textContent = displayValue;
            otherValue = undefined;
            clickedOnce = false;
            equalsClicked = true;
        }
        else if(whichOperator === 'multiply'){
            display.textContent = '';
            displayValue= operate(multiply, parseInt(displayValue), parseInt(otherValue));
            display.textContent = displayValue;
            otherValue = undefined;
            clickedOnce = false;
            equalsClicked = true;
        }
        else if(whichOperator === 'divide'){
            if(otherValue === '0'){
                 return display.textContent = 'To Infinity';  
            } else{
                display.textContent = '';
                displayValue= operate(divide, parseInt(displayValue), parseInt(otherValue));
                display.textContent = displayValue;
                otherValue = undefined;
                clickedOnce = false;
                equalsClicked = true;
            }
        }
    }
});

clearBtn.addEventListener('click', clearAll);