function solve() {
   let totalPrice = 0;
   let productObj = {};

   let addButtons = document.querySelectorAll('.add-product');
   let allButtonsArray = Array.from(addButtons);
   allButtonsArray.forEach(addBtn => addBtn.addEventListener('click', addHandlerFn));

   let textArea = document.querySelector('textarea');
   let allButtonsInHtml = document.querySelectorAll('button');

   let checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', checkoutFn);

   function addHandlerFn(event) {
      let currentelement = event.target;
      let divProduct = currentelement.parentElement.parentElement;
      // качвам се 2 родителя на горе по дървото за да взема продукт-Дива

      let productTitle = divProduct.querySelector('.product-title');
      let product = productTitle.textContent;

      let priceTag = divProduct.querySelector('.product-line-price');
      let price = Number(priceTag.textContent);

      totalPrice += price;

      productObj[product] = true;
      textArea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
   }

   function checkoutFn() {
      allButtonsInHtml.forEach(btn => btn.setAttribute("disabled", ""));
      let nameProduct = Object.keys(productObj).join(', ');
      textArea.value += `You bought ${nameProduct} for ${totalPrice.toFixed(2)}.`
   }
}





function solve() {
   let totalPrice = 0;
   let products = [];

   const productsElement = Array.from(document.querySelectorAll('.product'));
   const checkoutButtonElement = document.querySelector('.checkout');
   const textareaElement = document.getElementsByTagName('textarea')[0];

   textareaElement.removeAttribute('disabled');

   checkoutButtonElement.addEventListener('click', checkOut);

   function checkOut(event) {
      const addButtons = Array.from(document.querySelectorAll('.add-product'));

      addButtons.forEach(button => {
         button.setAttribute('disabled', true);
      });

      checkoutButtonElement.setAttribute('disabled', true);

      textareaElement.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
   
   productsElement.forEach(item => {
      const currProductName = item.children[1].children[0].textContent;
      const currPrice = Number(item.children[3].textContent);

      const currButtonElement = item.children[2].children[0];

      currButtonElement.addEventListener('click', added);

      function added() {
         totalPrice += currPrice;

         if (!products.includes(currProductName)) {
            products.push(currProductName);
         }

         textareaElement.textContent += `Added ${currProductName} for ${currPrice.toFixed(2)} to the cart.\n`;
      }
   });
}