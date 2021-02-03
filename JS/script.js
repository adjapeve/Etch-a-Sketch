let numCells = 256;
let colorMode = "normal"
drawCanvas(numCells);

const wrapper = document.getElementById('cellsContainer');
wrapper.addEventListener('mouseover', colourCell);

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearCanvas);

const darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', setDarkMode);

function setDarkMode() {
    let cells = document.querySelectorAll('.emptyCellWhite');
    cells.forEach(element => {
        element.classList.replace('emptyCellWhite', 'emptyCellBlack');
    });
    cells = document.querySelectorAll('.colorCellBlack');
    cells.forEach(element => {
        element.classList.replace('colorCellBlack', 'colorCellWhite');
    });
    colorMode = "dark";
}

function drawCanvas(num) {
    const cellsContainer = document.querySelector('#cellsContainer');
    cellsContainer.style.setProperty('--numberCells', Math.sqrt(num));
    for (let i = 0; i < num; i++) {
        let cellDiv = document.createElement('div');
        //let cellId = document.createAttribute("id");
        cellDiv.classList.add("emptyCellWhite");
        cellsContainer.appendChild(cellDiv);
    }
}

function colourCell(e) {
    if (e.target.parentElement.id == 'cellsContainer')
        switch (colorMode) {
            case 'normal':
                e.target.classList.add('colorCellBlack');
                break;
            case 'dark':
                e.target.classList.add('colorCellWhite');
                break;
        }
}

function clearCanvas() {
    colorMode = 'normal'
    numCells = prompt('Grid Size Min 1 - Max 100', 16);
    if (numCells > 0 && numCells <= 100) {
        numCells *= numCells;
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.lastChild);
        }
        drawCanvas(numCells)
    }
    else {
        alert("Number of cells is out of range");
        clearCanvas();
    }
}