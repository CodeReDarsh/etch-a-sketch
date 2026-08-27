"use-strict";

function generateGrid(dimension = 16) {
  console.log("inside generateGrid");
  const divList = [];
  for (let i = 0; i < dimension; i++) {
    divList.push(document.createElement("div"));
    for (let j = 0; j < dimension; j++) {
      divList[i].appendChild(document.createElement("div"));
    }
  }
  console.table(divList);
  grid.replaceChildren(...divList);
}

const buttons = document.querySelector(".btn-container");
const grid = buttons.nextElementSibling;
generateGrid();
