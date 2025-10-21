function numClickHandler(event) {
    output.textContent = output.textContent + event.target.textContent;
    // console.log(event.target.textContent)
    lastIsOperator=false;
}

let lastIsOperator=false;

function opClickHandler(event, mark ) {
    if(!lastIsOperator){
        output.textContent = output.textContent + event.target.textContent;
        lastIsOperator=true;
    }
}
function backspaceHandler(event){
    output.textContent = output.textContent.trimEnd();
}
const output = document.querySelector(".output");


const numPad = document.querySelector(".num-pad");
for(i=0; i<9; i++){
    numPad.children[i].addEventListener('click', numClickHandler)
}

const operators = document.querySelector(".operators");
for(i=0; i<4; i++){
    operators.children[i].addEventListener('click', opClickHandler)
}

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', backspaceHandler)