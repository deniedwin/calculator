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
            add(a,b);
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