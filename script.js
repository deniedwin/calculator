//functions to to mathematical arithmetic
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

//global variables
let numA = "";
let numB = "";
let operator = "_";
let toggle = 0;

//function to create switch cases to call
//a mathematical function depending on the
//operator used
function operate(op, a, b){
    switch(op){
        case "+": 
            console.log("add here");
            console.log(add(a,b));
            break;
        case "-":
            console.log("substract here");
            console.log(subtract(a,b));
            break;
        case "x":
            console.log("multiply here");
            console.log(multiply(a,b));
            break;
        case "/": 
            console.log("divide here");
            console.log(divide(a,b));
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

//create display for result of operations
const result = document.createElement("div");

//function to create buttons for all the numbers and operators
function createCalc(){
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
            let btnPress = btn.textContent;
            if(btnPress === "+" || btnPress === "-" || btnPress === "x" || btnPress === "/" || btnPress === "c"){
                operator = btnPress;
                alert("operator");
            }
            else if(btnPress === "="){
                alert("show result");
                operate(operator, Number(numA), Number(numB));
            }
            else if(!toggle){
                numA = btnPress;
                toggle = 1;
                alert("numA");
            }
            else if(toggle){
                numB = btnPress;
                toggle = 0;
                alert("numB");
            }
            //show what has been pressed on the screen
            result.textContent = `${numA} ${operator} ${numB}`;

            console.log(btnPress);
        });
        //after creating the buttons append buttons to container
        container.appendChild(btn);
    }
}
// result.textContent = "show result"
display.appendChild(result);
//call function to display all numbers and operators
createCalc();

