const container = document.querySelector(".container");
const body = document.querySelector("body");
const button = document.createElement("button");

body.appendChild(button);

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
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.backgroundColor = "black";
            });

            row.appendChild(gridItem);
        }
        container.appendChild(row);
    }
    
}



button.addEventListener("click", () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(prompt("How many squares per side?"));
});