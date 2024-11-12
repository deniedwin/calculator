function add(a, b) {
	return a+b;
};

function subtract(a, b) {
	return a-b;
};

function multiply(a, b) {
  return a*b;
};

function divide(a, b) {
    return a/b;
};

const varA = 0;
const varB = 0;
const optor = 0;

function operate(op, a, b){

    switch(op){
        case "+": 
            console.log("add here");
            console.log(add(a,b));
            break;
        case "-":
            console.log("substract here");
            subtract(a,b);
            break;
        case "*":
            console.log("multiply here");
            multiply(a,b);
            break;
        case "/": 
            console.log("divide here");
            divide(a,b);
            break;
        default:
            console.log("enter other op");
    }
}
//function to find and select display of html
const display = document.querySelector("#display");
//function to find and select container of html
//here the number and operator button will be stored
const container = document.querySelector("#container");
const DISPLAY_SIZE = container.offsetWidth; //get container size from css file

//create display for result of operations
const result = document.createElement("div");
result.textContent = "show result"
display.appendChild(result);

//function to create buttons for all the numbers and operators
function createNumbers(){
    //to create a 4x5 array buttons 
    for(let i = 0; i < 16; i++){
        const btn = document.createElement("button");
        btn.classList.add("cell");
        if(i < 10){
            btn.textContent = i;
        }
        else if(i === 10){
            btn.textContent = "+";
        }
        else if(i === 11){
            btn.textContent = "-";
        }
        else if(i === 12){
            btn.textContent = "x";
        }
        else if(i === 13){
            btn.textContent = "/";
        }
        else if(i === 14){
            btn.textContent = "=";
        }
        else{
            btn.textContent = "c";
        }

        //function to add listener once a button is clicked
        btn.addEventListener("click", () => {
            console.log(btn.textContent);
        }); 

        container.appendChild(btn);
    }
}
//call function to display all numbers and operators
createNumbers();

