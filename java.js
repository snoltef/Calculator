let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded",function(){
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let previous = document.querySelector(".previous");
let current = document.querySelector(".current");

numbers.forEach((number)=> number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    current.textContent = currentValue;
}))

    operators.forEach((op)=> op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previous.textContent = previousValue + " "+operator;
        current.textContent = currentValue;
    })) 

    clear.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = '';
        previous.textContent = currentValue;
        current.textContent = currentValue; 
    })

    equal.addEventListener("click",function(){
        if(currentValue != '' && previousValue != ''){
            calculate()
            previous.textContent = '';
            if(previousValue.lenght <= 5){
            current.textContent = previousValue;}
            else{
            current.textContent = previousValue.slice(0,5) + "...";
            }
        }
    })

    decimal.addEventListener("click",function(){
        addDecimal();
    })
})

function handleNumber(num){
    if(currentValue.length <=5){
    currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue= '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }
    else if(operator === "-"){
        previousValue -= currentValue;
    }
    else if(operator === "x"){
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}