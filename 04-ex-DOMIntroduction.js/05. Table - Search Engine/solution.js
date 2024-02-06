function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function solve() {
      document.querySelector('#searchBtn').addEventListener('click', onClick);
   
      function onClick() {
         let inputField = document.getElementById('searchField').value.toLowerCase();
         let currentRow = document.querySelectorAll('tbody tr');
   
         for (let row of currentRow) {
            thisRow = row.textContent.toLowerCase();
   
            if (thisRow.includes(inputField)) {
               row.setAttribute("class", "select");
            } else {
               row.removeAttribute("class");
            }
         }
         inputField = '';
      }
   }
    
}


function solve() { // case sensitive!
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let inputField = document.getElementById('searchField');
   let currentRow = document.querySelectorAll('tbody tr');

   function onClick() {
   for (let row of currentRow) {
      row.classList.remove('select');
      if (inputField.value !== '' && row.innerHTML.includes(inputField.value)) {
         row.className = 'select';
      }
   }
   inputField.value = '';
}
}



function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   function onClick() {
      let inputField = document.getElementById('searchField').value.toLowerCase();
      let currentRow = Array.from(document.querySelectorAll('tbody tr'));

      for (let row of currentRow) {
         let rowElement = row.textContent.toLowerCase();
         if (rowElement.includes(inputField)) {
            row.classList.add('select');
         } else
            row.classList.remove('select');
      }

      inputField = '';
   }

}