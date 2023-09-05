"use strict";

const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach((elem) => {
  console.log(`
Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
