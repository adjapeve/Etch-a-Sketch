let numCells = 256;
let colorMode = "normal";
drawCanvas(numCells);

const wrapper = document.getElementById('cellsContainer');
wrapper.addEventListener('mouseover', colourCell);

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearCanvas);

const darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', setGridBackground);

const rainbowModeButton = document.getElementById('rainbowModeButton');
rainbowModeButton.addEventListener('click', setGridBackground);

function setGridBackground(e) {
    let selectedColorMode = e.target.id;
    let emptyCells = "";
    let coloredCells = "";
    switch (selectedColorMode) {
        case 'darkModeButton':
            emptyCells = document.querySelectorAll('.emptyCellWhite');
            emptyCells.forEach(element => {
                element.classList.replace('emptyCellWhite', 'emptyCellBlack');
            });
            coloredCells = document.querySelectorAll('.colorCellBlack');
            coloredCells.forEach(element => {
                element.classList.replace('colorCellBlack', 'colorCellWhite');
            });
            coloredCells = document.querySelectorAll('.colorCellRainbow');
            coloredCells.forEach(element => {
                element.style.backgroundColor = "";
                element.classList.replace('colorCellRainbow', 'colorCellWhite');
            });
            colorMode = "dark";
            break;
        case 'rainbowModeButton':
            if (colorMode == "dark") {
                emptyCells = document.querySelectorAll('.emptyCellBlack');
                emptyCells.forEach(element => {  
                    element.classList.replace('emptyCellBlack', 'emptyCellWhite');
                });
            }
            coloredCells = document.querySelectorAll('.colorCellWhite');
            coloredCells.forEach(element => {
                element.classList.replace('colorCellWhite', 'colorCellBlack');
            });
            colorMode = "rainbow";
            break;
    }
}

function drawCanvas(num) {
    const cellsContainer = document.querySelector('#cellsContainer');
    cellsContainer.style.setProperty('--numberCells', Math.sqrt(num));
    for (let i = 0; i < num; i++) {
        let cellDiv = document.createElement('div');
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
                e.target.style.backgroundColor = "";
                e.target.classList.add('colorCellWhite');
                break;
            case 'rainbow':
                e.target.style.backgroundColor = getRandomRGB();
                e.target.classList.add('colorCellRainbow');
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

function getRandomnumber(maxnumber) {
    return Math.floor(Math.random() * maxnumber)
}

function getRandomRGB() {
    let RGB = [];
    for (let i = 0; i <= 2; i++)
        RGB[i] = getRandomnumber(255);
    return `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[1]}) `;
}