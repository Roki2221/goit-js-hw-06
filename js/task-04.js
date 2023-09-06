"use strict";

let counterValue = 0;
const screenValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementClick = () => {
  counterValue -= 1;
  screenValue.textContent = counterValue;
};

const incrementClick = () => {
  counterValue += 1;
  screenValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);
