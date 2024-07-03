// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Challenge: Create a solar system</title>
//         <style>
//             body {
//                 background-color: black;
//                 padding: 10px;
//             }
//             .planet {
//                 width: 100px;
//                 height: 100px;
//                 border-radius: 50%;
//                 text-align: center;
//                 padding: 10px;
//                 position: relative;
//                 border: 2px solid white;
//             }
//             .moon {
//                 position: absolute;
//                 width: 30px;
//                 height: 30px;
//                 border-radius: 50%;
//                 background: rgb(237, 237, 237);
//                 border: 5px solid red;
//             }
//         </style>
//     </head>
//     <body>

//     <section class="listPlanets"></section>

//     <script src="..."></script>
//     </body>
// </html>


// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
// 1. **Mercury**: 0 moons
// 2. **Venus**: 0 moons
// 3. **Earth**: 1 moon
// 4. **Mars**: 2 moons
// 5. **Jupiter**: 95 moons (confirmed as of 2023)
// 6. **Saturn**: 145 moons (confirmed as of 2023)
// 7. **Uranus**: 27 moons
// 8. **Neptune**: 14 moons

const planets = [
    {planet_name: 'Mercury', moon: 0, bg_color: "red"},
    {planet_name: 'Venus', moon: 0, bg_color: "green"},
    {planet_name: 'Earth', moon: 1, bg_color: "grey"},
    {planet_name: 'Mars', moon: 2, bg_color: "yellow"},
    {planet_name: 'Jupiter', moon: 95, bg_color: "blue"},
    {planet_name: 'Saturn', moon: 145, bg_color: "brown"},
    {planet_name: 'Uranus', moon: 27, bg_color: "purple"},
    {planet_name: 'Neptune', moon: 14, bg_color: "pink"}
];

container = document.getElementsByClassName("listPlanets")[0];
for (let i = planets.length-1; i >= 0; i--) {
    let planet = document.createElement('div');
    container.appendChild(planet);
    planet.classList.add('planet');
    planet.innerText = planets[i].planet_name;
    planet.style.backgroundColor = planets[i].bg_color;

    let left = 0;
    for (let j = planets[i].moon; j > 0; j--) {
        let moon = document.createElement('div')
        moon.classList.add('moon');
        moon.style.left = left + 'px';
        planet.appendChild(moon);
        left += 10;
    };
};