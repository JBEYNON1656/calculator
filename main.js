
function operator(opera, num1, num2){
	if (opera === "add"){return num1 + num2}
		else if (opera === "subtract"){return num1 - num2}
		else if (opera === "multiply"){return num1 * num2}
		else {return num1 / num2}
}

let opStaging
let opType
let secondNum = false

let opStagingText = document.querySelector('#opStaging')
let opTypeText = document.querySelector('#opTypeText')
let resultsNum = document.querySelector('#results')


document.querySelector('#clear').addEventListener('click', function() 
  {
  	resultsNum.textContent = "0";
  	opStaging = null;
  	opStagingText.textContent = opStaging;
  	opType = null;
  	opTypeText.textContent = opType;
  	secondNum = false;
  });


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


document.querySelectorAll('.operator').forEach(function(item) {
item.addEventListener('click', function() 
  {
  	opType = item.id;
  	opStaging = parseInt(resultsNum.textContent);
  	opStagingText.textContent = opStaging;
  	opTypeText.textContent = opType;
  	secondNum = false;
  });
 });
 
document.querySelector('#equals').addEventListener('click', function() 
  {
  	resultsNum.textContent = operator(opType, opStaging, parseInt(resultsNum.textContent))
  });



