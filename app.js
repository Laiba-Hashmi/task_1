console.log(`calculator!!!`);
let firstNumber = parseInt(prompt("Enter the first number"));
console.log(`your first number : ${firstNumber}`);
let secondNumber = parseInt(prompt("Enter the second number"));
console.log(`your second number : ${secondNumber}`);
let operator = prompt("Which operation do you want");
console.log(`operation you want : ${operator}`);
let result;
if (operator =='+') {
    result = firstNumber+secondNumber
}
else if (operator =='-') {
    result = firstNumber-secondNumber
}
else if (operator =='*') {
    result = firstNumber*secondNumber
}
else if (operator =='/') {
    result = firstNumber/secondNumber
}
else {
    result = "invalid operation"
}
console.log(`your statement is : ${firstNumber} ${operator} ${secondNumber} = ${result}`);
alert(`your result : ${result}`)