
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector('ul');
const elements = ingredients.map( const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList.add('item'););

for (let i = 0; i < ingredients.length; i += 1) {
    const ingredient = ingredients[i];

   

    elements.push(liEl);
}

ulEl.append(...elements);

console.log(ulEl);
console.log(...elements)