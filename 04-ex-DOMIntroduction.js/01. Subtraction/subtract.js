function subtract() {
   let firstElement = document.getElementById("firstNumber");
   let secondElement = document.getElementById("secondNumber");

   let firstEl = Number(firstElement.value);
   let secondEl = Number(secondElement.value);
   let resultElement = firstEl - secondEl;

   let resultElements = document.getElementById("result");

  resultElements.textContent = resultElement;
}



function subtract() {
  let firstElement = Number(document.getElementById("firstNumber").value);
  let secondElement = Number(document.getElementById("secondNumber").value);

  let result = firstElement - secondElement;

  let resultElement = document.getElementById("result");

  resultElement.textContent = result;
}