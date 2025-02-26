const container = document.querySelector(".container");
const body = document.querySelector("body");
const button = document.createElement("button");

button.textContent = "change density";

body.appendChild(button);

button.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(prompt("How many squares per side?"));
});

function createGrid(units) {
    if (units > 99) {
        return;
    }
    let GRID_SIZE = container.clientWidth / units;
    let row;

    for(let i = 0; i < units; i++) {
        row = document.createElement("div");
        row.className = "row";
        for(let k = 0; k < units; k++) {
            let gridItem = document.createElement("div");
            gridItem.className = "gridPiece";
            gridItem.style.width = GRID_SIZE + "px";
            gridItem.style.height = GRID_SIZE + "px";
            gridItem.addEventListener("mouseover", () => changeColor(gridItem));

            row.appendChild(gridItem);
        }
        container.appendChild(row);
    }
    
}

function changeColor(gridItem) {
    const random1 = Math.floor(Math.random() * 255);
    const random2 = Math.floor(Math.random() * 255);
    const random3 = Math.floor(Math.random() * 255);
    gridItem.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}