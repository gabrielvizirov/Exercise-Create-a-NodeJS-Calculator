var readlineSync = require('readline-sync');
 
// Wait for user's response. 
var num1 = parseFloat(readlineSync.questionFloat('Please enter a number '));

var num2 = parseFloat(readlineSync.questionFloat('Please enter another number '));

console.log("Please enter an operator (+, - , / , * )");

//keep asking for an operator till we get a valid response
var operator = readlineSync.promptCLLoop({
  '+': function() {
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    return true; 
  },
  '-': function() {
    console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    return true; 
  },
  '*': function() {
    console.log(num1 + " * " + num2 + " = " + (num1 * num2));
    return true; 
  },
  '/': function() {
    console.log(num1 + " / " + num2 + " = " + (num1 / num2));
    return true; 
  }
});