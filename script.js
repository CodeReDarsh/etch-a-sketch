"use-strict";

function generateGrid(dimension = 16) {
  const divList = [];
  for (let i = 0; i < dimension; i++) {
    divList.push(document.createElement("div"));
    for (let j = 0; j < dimension; j++) {
      divList[i].appendChild(document.createElement("div"));
    }
  }
  grid.replaceChildren(...divList);
}

function promptForSize() {
  let dimension = prompt(
    "Enter a grid length between 1 and 100 for generating a sqare grid.",
  );
  while (
    dimension &&
    (isNaN(dimension) ||
      !Number.isInteger(Number(dimension)) ||
      parseInt(dimension) < 1 ||
      parseInt(dimension) > 100)
  ) {
    dimension = prompt(
      "Invalid grid length. Enter an integer number between 1 and 100.",
    );
  }
  if (dimension) {
    generateGrid(parseInt(dimension));
  }
}

function handleClick(e) {
  if (e.target.id === "btn-change-size") {
    promptForSize();
  }
}

const buttons = document.querySelector(".btn-container");
const grid = buttons.nextElementSibling;
generateGrid();
buttons.addEventListener("click", handleClick);
