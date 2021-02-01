let numCells = 256;
drawCanvas(numCells);

const wrapper = document.getElementById('divsContainer');
wrapper.addEventListener('mouseover', colourCell);


const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearCanvas);

function drawCanvas(num) {
    const divsContainer = document.querySelector('#divsContainer');
    divsContainer.style.setProperty('--numberCells',Math.sqrt(num));
    for (let i = 0; i < num; i++) {
        let cellDiv = document.createElement('div');
        let cellId = document.createAttribute("id");
        cellDiv.classList.add("cell");
        divsContainer.appendChild(cellDiv);
    }
}

function colourCell(e) {
    if (e.target.parentElement.id == 'divsContainer')
        e.target.classList.add('change');
}

function clearCanvas() {
    numCells = prompt('Grid Size - Max 100', 16);
    numCells *= numCells;
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
    }
    drawCanvas(numCells)

}



