function calc() {
    let firstNumber = document.getElementById("num1");
    let secondNumber = document.getElementById("num2");
    let result = Number(firstNumber.value) + Number(secondNumber.value);
  
    let sum = document.getElementById("sum");
  
    sum.value = result;
  }