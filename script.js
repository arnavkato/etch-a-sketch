const container = document.querySelector(".container");

createGrid(16);

function createGrid(units) {
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
