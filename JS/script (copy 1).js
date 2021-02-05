let numCells = 256;
let colorMode = "normal";
let emptyCellColor = "white";
let cellColor = "black";
let root = document.documentElement;
root.style.setProperty('--emptyCellColor', emptyCellColor);
root.style.setProperty('--cellColor', cellColor);

drawCanvas(numCells);

const wrapper = document.getElementById('cellsContainer');
wrapper.addEventListener('mouseover', colourCell);

const slider=document.getElementById("gridSizeSlider");
slider.addEventListener('drag',function(e) {console.log("done");});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearCanvas);

const darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', setGridBackground);

const rainbowModeButton = document.getElementById('rainbowModeButton');
rainbowModeButton.addEventListener('click', setGridBackground);

const normalModeButton = document.getElementById('normalModeButton');
normalModeButton.addEventListener('click', setGridBackground);

function setGridBackground(e) {
    let selectedColorMode = e.target.id;
    let emptyCells = "";
    let coloredCells = "";
    switch (selectedColorMode) {
        case 'darkModeButton':
            cellColor = "white";
            emptyCellColor = "black";
            root.style.setProperty('--emptyCellColor', emptyCellColor);
            root.style.setProperty('--cellColor', cellColor);
            if (colorMode == "rainbow") {
                coloredCells = document.querySelectorAll('.colorCell');
                coloredCells.forEach(element => {
                    element.style.backgroundColor = "";
                });
            }
            colorMode = "dark";
            break;
        case 'rainbowModeButton':

            if (colorMode == "dark") {
                emptyCellColor = "white";
                cellColor = "black";
                root.style.setProperty('--emptyCellColor', emptyCellColor);
                root.style.setProperty('--cellColor', cellColor);
            }
            colorMode = "rainbow";
            break;

        case 'normalModeButton':
            cellColor = "black";
            emptyCellColor = "white";
            root.style.setProperty('--emptyCellColor', emptyCellColor);
            root.style.setProperty('--cellColor', cellColor);

            if (colorMode == "rainbow") {
                coloredCells = document.querySelectorAll('.colorCell');
                coloredCells.forEach(element => {
                    element.style.backgroundColor = "";
                });
            }
            colorMode = "normal";
            break;
    }
}

function drawCanvas(num) {
    const cellsContainer = document.querySelector('#cellsContainer');
    cellsContainer.style.setProperty('--numberCells', Math.sqrt(num));
    for (let i = 0; i < num; i++) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add("emptyCell");
        cellsContainer.appendChild(cellDiv);
    }
}

function colourCell(e) {
    if (e.target.parentElement.id == 'cellsContainer')
        switch (colorMode) {
            case 'normal':
                e.target.classList.remove("emptyCell");
                e.target.classList.add("colorCell");
                break;
            case 'dark':
                e.target.style.backgroundColor = "";
                e.target.classList.remove("emptyCell");
                e.target.classList.add('colorCell');
                break;
            case 'rainbow':
                e.target.style.backgroundColor = getRandomRGB();
                e.target.classList.remove("emptyCell");
                e.target.classList.add('colorCell');
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