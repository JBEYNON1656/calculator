
// Function that takes two numbers and evaluates them against the chosen operator
function operator(opera, num1, num2){
	if (opera === "divide" && num2 === 0){return "Cannot divde by zero!"}
		else if (opera === "add"){return num1 + num2}
		else if (opera === "subtract"){return num1 - num2}
		else if (opera === "multiply"){return num1 * num2}
		else {return num1 / num2}
}

let opStaging //The number previously on the screen that will be evaulated against
let opType // The type of operator being chosen
let secondNum = false //If a second number has been chosen yet or not
let resultsNum = document.querySelector('#results') //Results window


// Clear button. Clears varaible that hold numbers and operators
document.querySelector('#clear').addEventListener('click', function() 
  {
  	resultsNum.textContent = "0";
  	opStaging = null;
  	opType = null;
  	secondNum = false;
  });

// Adds functionality to digit buttons to add to the results window
document.querySelectorAll('.number').forEach(function(item) {
item.addEventListener('click', function() 
  {
  	if (resultsNum.textContent === "0"){resultsNum.textContent = item.textContent}
  	else if (opType && opStaging && secondNum != true){
  		resultsNum.textContent = item.textContent;
  		secondNum = true;
  	}
	else if (parseInt(resultsNum.textContent) > 0 || secondNum === true){resultsNum.textContent += item.textContent}
  });
 });

// Adds functionality to operator buttons
document.querySelectorAll('.operator').forEach(function(item) {
item.addEventListener('click', function() 
  {
  	opType = item.id;
  	opStaging = parseInt(resultsNum.textContent);
  	secondNum = false;
  });
 });
 
// Adds functionality to equal button to run the operator function at the top of the page
document.querySelector('#equals').addEventListener('click', function() 
  {
  	resultsNum.textContent = operator(opType, opStaging, parseInt(resultsNum.textContent))
  });



