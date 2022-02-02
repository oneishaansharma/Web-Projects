console.log("Connected")

let num = "";
let stack = [];
let isEvaluated = false;
let screen = document.querySelector('.screen');

// Equal Button
const equalButton = document.querySelector('.equals')
equalButton.addEventListener("click", evaluateStack);


// All Clear Button
const acButton = document.querySelector('#btnAC');
acButton.addEventListener("click", clearScreen);

// Delete Button
const delButton = document.querySelector('#del');
delButton.addEventListener("click",deleteLastDigit);


// Number Buttons
const numbtns = document.querySelectorAll('.btn .numbtn');
for (let btn of numbtns){
	btn.addEventListener("click", addToNum);
	}

// Operator Buttons
const opbtns = document.querySelectorAll('.operatorbtn');
for (let btn of opbtns){
	btn.addEventListener("click", addOperatorToStack);
	btn.addEventListener("click", evaluateStack);

	}



function addToNum(){
	if(this.textContent === "." && num.includes(".")){
		return
	}


	if(isEvaluated === true){
		num = this.textContent;
		stack = [num];
		isEvaluated = false;

	}
	else if(stack[stack.length-1]!=="+" && stack[stack.length-1]!=="-" && stack[stack.length-1]!=="*" && stack[stack.length-1]!=="/"){
		num = num + this.textContent;
		if (stack[stack.length-1]!=="+" && stack[stack.length-1]!=="-" && stack[stack.length-1]!=="*" && stack[stack.length-1]!=="/"){
			stack.pop();
		}
		stack.push(num);
	}
	else{
		num = this.textContent;
		stack.push(num);
		
	}

	displayScreen();

	}


function addOperatorToStack(){
	stack.push(this.textContent);
	displayScreen();
	num = "";
	isEvaluated = false;
}


function evaluateStack(){
	if(this.classList.value === "operatorbtn"){

		prevOperation = stack.pop();
		num = eval(stack.join(''));
		stack = [num, prevOperation];
	}
	else if(this.classList.value === "equals"){

		if(stack[stack.length-1]!=="+" && stack[stack.length-1]!=="-" && stack[stack.length-1]!=="*" && stack[stack.length-1]!=="/"){

			num = eval(stack.join(''));
			stack = [num]		

		}
		else{
			stack.pop();
			num = eval(stack.join(''));
			stack = [num];
		}
		isEvaluated = true;
	}

	
	displayScreen();
}

function displayScreen(){
	screen.textContent = num;
}



function clearScreen(){
	num = "";
	stack=[];
	screen.textContent = "";
}


function deleteLastDigit(){
	if(stack[stack.length-1]==="+" || stack[stack.length-1]==="-" || stack[stack.length-1]==="*" || stack[stack.length-1]==="/"){
		stack.pop();
		}
	else{
		num = String(num);
		num = num.slice(0,-1);
		stack.pop();
		stack.push(num);
	}
	displayScreen();
}

// class Calculator{
// 	constructor(cur_num, prev_num){
// 		this.cur_num = cur_num;
// 		this.prev_num = prev_num;
// 	}



// }