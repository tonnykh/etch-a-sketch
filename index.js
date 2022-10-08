const sketchContainer = document.querySelector('.sketchContainer');
const slider = document.querySelector('.slider');
const label = document.querySelector('.label');
const blackBtn = document.querySelector('.blackBtn');
const randomBtn = document.querySelector('.randomBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const clearBtn = document.querySelector('.clearBtn');
let cells = document.querySelectorAll('.cell');


function createCanvas(size) {
    changeLabel(size);
    let canvasDimension = size * size;

    sketchContainer.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);

    for (let i = 0; i < canvasDimension; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        sketchContainer.appendChild(cell);
    }

    cells = document.querySelectorAll('.cell');
}


function resetCanvas() {
    child = sketchContainer.lastElementChild;

    while (child) {
        sketchContainer.removeChild(child);
        child = sketchContainer.lastElementChild;
    }

    cells = document.querySelectorAll('.cell');
}


function changeLabel(value) {
    label.textContent = `${value} x ${value}`;
}


function listen(color) {
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover' || 'click', function(e)  {
            switch(color) {
                case 'black':
                    e.target.style.setProperty('background-Color', 'black');
                    break;
                case 'random':
                    e.target.style.setProperty('background-Color', '#' + Math.floor(Math.random()*16777215).toString(16));
                    break;
                case 'eraser':
                    e.target.style.setProperty('background-Color', 'white');
                    break;                    
                default:
                    e.target.style.setProperty('background', 'black');
                    break;
            }
        });
    });
}


slider.addEventListener('change', function() {
    resetCanvas();
    changeLabel(this.value);
    createCanvas(this.value);
    listen();
})


blackBtn.addEventListener('click', function() {
    listen('black');
})


randomBtn.addEventListener('click', function() {
    listen('random');
})


eraserBtn.addEventListener('click', function() {
    listen('eraser');
})


clearBtn.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.style.removeProperty('background-color');
    })
  listen('white');
})


createCanvas(slider.value); //Start function 
listen();