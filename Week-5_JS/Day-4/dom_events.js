let div = document.createElement('div');
document.body.appendChild(div);
div.style.width = '200px';
div.style.height = '200px';
div.style.border = '1px solid black';
div.addEventListener('mouseover', bgRed);
function bgRed(e) {
    e.target.style.backgroundColor = 'red';
}

let message = document.createElement('h1');
message.innerText = 'Title';

function display() {
    document.body.appendChild(message);
};

function remove() {
    message.remove();
};

setTimeout(display, 5 * 1000);
setTimeout(remove, 10 * 1000);
