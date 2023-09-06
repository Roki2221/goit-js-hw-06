"use strict";

const input = document.querySelector("#validation-input");

const checkInput = () => {
  if (input.value.trim().length !== +input.dataset.length) {
    if (input.classList.contains("valid")) {
      input.classList.replace("valid", "invalid");
      return;
    }
    input.classList.add("invalid");
    return;
  } else {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
      return;
    }
    input.classList.add("valid");
  }
};

input.addEventListener("blur", checkInput);
