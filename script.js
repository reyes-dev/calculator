//Currently I can change operator while the display is still blank
//So if I click one accidentally or forgot what operator I'm using, that's a problem
//But just making the display have a "+" or "-" temporarily is buggy
//because it carries over to the next act of adding digits
//For a fix, maybe adding divs for each operator that remain invisible but are toggled on // and off?

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
let operandClicked = false;

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
    operandClicked = true;
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
if(operandClicked){
    if(!(otherValue > 0)){
        whichOperator = 'add';
        display.textContent = '';
        clickedOnce = true;
        if(test){
            test = false;
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
            if(test){
                test = false;
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
            if(test){
                test = false;
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
            if(test){
                test = false;
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
            test = true;            
        }
        else if(whichOperator === 'subtract'){
            display.textContent = '';
            displayValue= operate(subtract, parseInt(displayValue), parseInt(otherValue));
            display.textContent = displayValue;
            otherValue = undefined;
            clickedOnce = false;
            test = true;
        }
        else if(whichOperator === 'multiply'){
            display.textContent = '';
            displayValue= operate(multiply, parseInt(displayValue), parseInt(otherValue));
            display.textContent = displayValue;
            otherValue = undefined;
            clickedOnce = false;
            test = true;
        }
        else if(whichOperator === 'divide'){
            display.textContent = '';
            displayValue= operate(divide, parseInt(displayValue), parseInt(otherValue));
            display.textContent = displayValue;
            otherValue = undefined;
            clickedOnce = false;
            test = true;
        }
    }
});