function create(words) {
let parentElement = document.getElementById("content");
let elemnts = words;
for (const el of elemnts) {
   let div = document.createElement('div');
   let p = document.createElement('p');
   let text = document.createTextNode(el)

   p.appendChild(text);
   p.style.display = 'none';
   div.appendChild(p);
   div.addEventListener('click',function(e){
      e.target.children[0].style.display = 'block'
   });
parentElement.appendChild(div);

}
}