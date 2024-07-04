// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>


// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function alert_messege() {
    alert('Hello World');
}
setTimeout(alert_messege, 2.01 * 1000)

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function add_parag() {
    parag = document.createElement('p');
    parag.innerText = 'Hello world'
    document.getElementById('container').appendChild(parag);
    if (document.querySelectorAll('#container > p').length == 5) {
        clearInterval(int);
    };
};
setTimeout(add_parag, 2 * 1000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
document.getElementById('clear').addEventListener('click', function() {
    clearInterval(int);
});
let int = setInterval(add_parag, 2 * 1000);

// 🌟 Exercise 2 : Move The Box
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
function myMove() {
    let outer = document.getElementById('cont_animate');
    let inner = document.getElementById('animate');
    let move_px = outer.clientWidth - inner.clientWidth;
    let px = 0;
    let move = setInterval(moving, 1);
    function moving() {
        inner.style.left = px + 'px';
        px += 1;
        if (px === move_px) {
            clearInterval(move);
        }
    }
}