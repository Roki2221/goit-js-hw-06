"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fragment = document.createDocumentFragment();
ingredients.forEach((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("item");

  fragment.appendChild(li);
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.appendChild(fragment);
