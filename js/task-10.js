function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const inputBox = document.querySelector("#controls");
const input = inputBox.firstElementChild;
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
//додано змінні
const minValue = +input.getAttribute("min");
const maxValue = +input.getAttribute("max");
const stepValue = +input.getAttribute("step");

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount < minValue || amount > maxValue) {
    return alert("wrong number");
  }
  for (let i = 0; i < amount; i += stepValue) {
    const div = document.createElement("div");
    div.style.backgroundColor = `${getRandomHexColor()}`;
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    container.appendChild(div);
  }
}

function destroyBoxes() {
  container.innerHTML = "";
  input.value = "";
}
