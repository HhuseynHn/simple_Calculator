/** @format */
//---------------------  Calculator-------------------------
var firstNumber = prompt("Enter first number");
firstNumber = parseFloat(firstNumber);
var operator = prompt("Enter only =>  +  |  -  |  *  |  /   ");
var secondNumber = prompt("Enter tsecond number");
secondNumber = parseFloat(secondNumber);
var result = 0;
var numberControl = false;
operator = operator.trim();
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  numberControl = true;
} else {
}
if (numberControl) {
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  } else {
    result = "Wrong enter";
  }
} else {
  result = "Only number enter";
}

alert(`Answer = ${result}`);
//----------------------------------------------
