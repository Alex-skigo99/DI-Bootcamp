// get html objects
const board = document.getElementById('board');
let colorBoxs = document.getElementsByClassName('color-box');
let current_color_box = document.getElementById('current');
let canva = document.getElementsByClassName('cell');
let clear_btn = document.getElementById('clear');
let mouseDown = false;
let color = 'white';
const clearColor = 'white';

// craete grid
function craete_board(x, y) {
    for (let i = 0; i < x * y; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }
}

craete_board(100, 75);

//  set color-box listener
for (box of colorBoxs) {
    box.addEventListener('click', function(e) {
        let elem = e.target;
        let style = window.getComputedStyle(elem)
        color = style.backgroundColor;
        console.log(color);
        current_color_box.style.backgroundColor = color;
    })
}

// set canva listener
for (const cell of canva) {
    cell.addEventListener('mouseover', function(e) {
        if (mouseDown) {
            e.target.style.backgroundColor = color;
        }     
    });
    cell.addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = color;
    });
}

// set body-mousedown listener
document.body.addEventListener('mousedown', function(e) {
    mouseDown = true;
});

document.body.addEventListener('mouseup', function(e) {
    mouseDown = false;
});

// set clear-button listener
clear_btn.addEventListener('click', function(e) {
    for (const cell of canva) {
        cell.style.backgroundColor = clearColor; 
    };
    current_color_box.style.backgroundColor = clearColor;    
});
