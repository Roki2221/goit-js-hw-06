"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInput = () => {
  if (input.value.trim().length === 0) {
    output.textContent = "Anonymous";
    return;
  }
  output.textContent = input.value;
};

input.addEventListener("input", handleInput);
