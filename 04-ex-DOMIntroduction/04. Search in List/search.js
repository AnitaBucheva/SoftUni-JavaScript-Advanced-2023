function search() {
  let counter = 0;

  let townsElements = Array.from(document.querySelectorAll('#towns li'));

  let userWords = document.getElementById("searchText").value;

  let match = document.getElementById('result');


for (const town of townsElements) {
   if (town.textContent.includes(userWords)) {
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
      counter++;
   }else{
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   }
}
match.textContent = `${counter} matches found`;
}
