"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//замінено на map
const liElements = ingredients.map((elem) => {
  const liItem = document.createElement("li");
  liItem.textContent = elem;
  liItem.classList.add("item");
  console.log(liItem);
  return liItem;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...liElements);
