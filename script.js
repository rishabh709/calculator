function numClickHandler(event) {
    expScreen.textContent = expScreen.textContent + event.target.textContent;
    expression += event.target.textContent;
    // console.log(event.target.textContent)
    lastIsOperator=false;
}

let lastIsOperator=false;
let expression='';

function opClickHandler(event, mark ) {
    if(!lastIsOperator){
        expScreen.textContent = expScreen.textContent + event.target.textContent;
        lastIsOperator=true;
        expression += mark;

    }
}
function backspaceHandler(event){
    expScreen.textContent = expScreen.textContent.substring(expScreen.textContent.length-1, -1);
    expression = expression.substring(expScreen.textContent.length-1, -1);
    equalToScreen.textContent = '';
    
}
function clearHandler(){
    expScreen.textContent = expScreen.textContent.substring(0, -1);
    expression = expression.substring(0, -1);
    lastIsOperator=!lastIsOperator;
    equalToScreen.textContent = '';
}

function equalsHandler(){
    eval(expression)
    equalToScreen.textContent = '='+eval(expression);
}


const expScreen = document.querySelector(".expScreen");


const numPad = document.querySelector(".num-pad");
for(let i=0; i<9; i++){
    numPad.children[i].addEventListener('click', numClickHandler)
}

const operators = document.querySelector(".operators");
let operatorsList = ['/', '*', '-', '+'];
for(let i=0; i<4; i++){
    console.log("th9s", operatorsList.at(0));
    operators.children[i].addEventListener('click', (event)=>opClickHandler(event, operatorsList[i]))
}

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', backspaceHandler)

const clearAll = document.querySelector('.clear');
clearAll.addEventListener('click', clearHandler);

const equals = document.querySelector(".equals");
equals.addEventListener('click', equalsHandler)

const equalToScreen = document.querySelector(".equalTo");


numPad.children[numPad.children.length-2].addEventListener('click', numClickHandler)
numPad.children[numPad.children.length-3].addEventListener('click', numClickHandler)