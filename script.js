const container = document.querySelector(".container");

container.style.border = "none";
container.style.display = "flex";

createGrid(16);

function createGrid(units) {
    let grid = [];
    let row;

    for(let i = 0; i < units; i++) {
        row = document.createElement("div");
        row.style.border = "none";
        for(let k = 0; k < units; k++) {
            row.appendChild(document.createElement("div"));
        }
        container.appendChild(row);
        grid.push(row);
    }
    console.log(grid);
}