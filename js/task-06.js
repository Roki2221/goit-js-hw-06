"use strict";

const input = document.querySelector("#validation-input");

//скорочено if
const checkInput = () => {
  if (input.value.trim().length !== +input.dataset.length) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    return;
  }
  input.classList.add("valid");
  input.classList.remove("invalid");
};

input.addEventListener("blur", checkInput);
