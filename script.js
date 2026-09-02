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

function toggleColor() {
  color = !color;
  const modeText = colorOnOff.lastElementChild;
  if (color) {
    modeText.textContent = "ON";
    modeText.style.color = "red";
  } else {
    modeText.textContent = "OFF";
    modeText.style.color = "black";
  }
}

function handleClick(e) {
  if (e.currentTarget.id === "btn-change-size") {
    promptForSize();
  } else if (e.currentTarget.id === "btn-toggle-color") {
    toggleColor();
  }
}

function generateRandom() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  const red = generateRandom();
  const green = generateRandom();
  const blue = generateRandom();
  return `rgb(${red}, ${green}, ${blue})`;
}

function colorSquare(e) {
  console.log("current square color:", e.target.style.backgroundColor);
  if (e.target.style.backgroundColor === "") {
    e.target.style.backgroundColor = color ? generateRandomColor() : "black";
    e.target.style.opacity = 0;
  }
  e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
  console.log("current square opacity:", e.target.style.opacity);
  console.log("opacity datatype:", typeof e.target.style.opacity);
}

function handleMouseOver(e) {
  if (e.target !== grid) {
    colorSquare(e);
  }
}

let color = false;
const changeSize = document.querySelector("#btn-change-size");
const colorOnOff = document.querySelector("#btn-toggle-color");
colorOnOff.addEventListener("click", handleClick);
changeSize.addEventListener("click", handleClick);

const grid = document.querySelector(".grid");
generateGrid();
grid.addEventListener("mouseover", handleMouseOver);
