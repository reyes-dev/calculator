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
let firstVal = 0;
let secondVal = 0;
let resultVal = 0;
let whichOperator;
let evalRunning = false;
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
}
//displays clicked digits
const displayNumbers = function(){
    if(!evalRunning){
        if(display.textContent === '0') display.textContent = '';
        if(!(whichOperator === undefined)){
            if(parseInt(display.textContent) === firstVal) display.textContent = '';
            display.textContent += this.innerHTML;
            secondVal = parseInt(display.innerHTML);
            console.log('Current second value: ' + secondVal);
        } else{
            display.textContent += this.innerHTML;
            firstVal = parseInt(display.innerHTML);
            console.log('Current first value: ' + firstVal);
        }
    }

}
//calls operate function and displays result
const displayResult = function(){
    if(whichOperator === 'add'){
        resultVal += operate(add, firstVal, secondVal);
        display.textContent = resultVal;
        whichOperator = undefined;
        firstVal = 0;
        secondVal = 0;
        evalRunning = true;
    }
}
//Displays clicked digit on top
operand.forEach(item => {item.addEventListener('click', displayNumbers)});
plusBtn.addEventListener('click', () => {
    whichOperator = 'add'
    if(evalRunning){
        evalRunning = false;
        display.textContent = '';
    }
});
equalsBtn.addEventListener('click', displayResult);
