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
let numResult = 0;
let operator = "";
let toggle = 0;

//function to create switch cases to call
//a mathematical function depending on the
//operator used
function operate(op, a, b){
    switch(op){
        case "+":
            //1e2 is to round numbers to 2 digits after the comma/dot
            numResult = Math.round(add(a,b) * 1e2) / 1e2;
            break;
        case "-":
            numResult = Math.round(subtract(a,b) * 1e2) / 1e2;
            break;
        case "x":
            numResult = Math.round(multiply(a,b) * 1e2) / 1e2;
            break;
        case "/": 
            numResult = Math.round(divide(a,b) * 1e2) / 1e2;
            break;
        default:
            console.log("enter other op");
    }
}

//function to find and select display of html
const display = document.querySelector("#display");
//function to find and select container of html
//here the number and operator button will be stored
const grid = document.querySelector("#grid");
//create display for result of operations
const result = document.createElement("div");

//function to create buttons for all the numbers and operators
function createCalc(){
    //to create a 4x4 array buttons 
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
            if(btnPress === "+" || btnPress === "-" || btnPress === "x" || btnPress === "/"){
                operator = btnPress;
                toggle = 1;
            }
            else if(btnPress === "="){
                operate(operator, Number(numA), Number(numB));
                result.textContent = numResult;
                numA = numResult;
                numB = "";
                toggle = 1;
            }
            else if(btnPress === "c"){
                numA = "";
                numB = "";
                operator = "";
                toggle = 0;
                numResult = 0;
                result.textContent = "";
            }
            else if(!toggle){
                //append the digit to numA if toggle is 0
                numA += btnPress;
            }
            else if(toggle){
                //append the digit to numB if toggle is 1
                numB += btnPress;
            }
            //show what has been pressed on the screen
            // Display the current input and operator
            if (btnPress !== "=") {
                result.textContent = `${numA} ${operator} ${numB}`;
            }
        });
        //after creating the buttons append buttons to container
        grid.appendChild(btn);
    }
}
//add display to div created
display.appendChild(result);
//call function to display all numbers and operators
createCalc();