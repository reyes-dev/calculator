//A barebones calculator that can perform simple evaluations and is colorful
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
//Called when operator buttons are clicked
//Sets boolean variable that turns true if equals is clicked to false
//Which in turn lets user click the digit buttons and add to total-variables
function clickOperator(operatorString){
    if(operandClicked){
        if(!(otherValue > 0)){
            whichOperator = operatorString;
            display.textContent = '';
            clickedOnce = true;
            if(equalsClicked){
                equalsClicked = false;
            }
        }
    }
}
//Performs the operate function on the two entered values
function clickEquals(op){
    display.textContent = '';
    displayValue = operate(op, parseInt(displayValue), parseInt(otherValue));
    display.textContent = displayValue;
    otherValue = undefined;
    clickedOnce = false;
    equalsClicked = true; 
}
//Clickability for digit numbers
//Sets value for the first number variable total 'displayValue'
//Sets value for the second number variable  if clickedOnce is true
//Both number variables are later ran through the operator functions to determine a new
// value for the displayValue variable
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
//Operator Functions
//Add operator
plusBtn.addEventListener('click', () =>{
    clickOperator('add');
});
//Minus operator
minusBtn.addEventListener('click', () =>{
    clickOperator('subtract');
    });
//Multiply operator
divideBtn.addEventListener('click', () =>{
    clickOperator('divide');
    });
//Division operator
multiplyBtn.addEventListener('click', () =>{
    clickOperator('multiply');
    });
//Equals operator
equalsBtn.addEventListener('click', () => {
    if(displayValue != undefined && otherValue != undefined){
        if(whichOperator === 'add'){
            clickEquals(add);     
        }
        else if(whichOperator === 'subtract'){
            clickEquals(subtract);
        }
        else if(whichOperator === 'multiply'){
            clickEquals(multiply);
        }
        else if(whichOperator === 'divide'){
            if(otherValue === '0'){
                 return display.textContent = 'To Infinity';  
            } else{
                clickEquals(divide);
            }
        }
    }
});
//clear button
clearBtn.addEventListener('click', clearAll);