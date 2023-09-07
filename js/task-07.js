const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = () => {
  text.style.fontSize = `${rangeInput.value}px`;
};

rangeInput.addEventListener("input", changeFontSize);
