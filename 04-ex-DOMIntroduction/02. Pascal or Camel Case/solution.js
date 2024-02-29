function solve() {
  let text = document.getElementById("text").value;
  let conventions = document.getElementById("naming-convention").value;

  let result = '';
  if (conventions === 'Camel Case') {

    for (let index = 0; index < text.length; index++) {
      if (text[index] === ' ') {
        result += (text[index + 1].toUpperCase())
        index++;
      } else {
        result += text[index].toLowerCase();
      }

    }
  } else if (conventions === 'Pascal Case') {
    result += text[0].toUpperCase();
    for (let index = 1; index < text.length; index++) {
      if (text[index] === ' ') {
        result + text[index + 1].toUpperCase();
        index++;
      } else {
        result += text[index].toLowerCase();
      }

    }
  } else {
    result = 'Error!';
  }
  let resultElement = document.getElementById("result");
  resultElement.textContent = result;
}