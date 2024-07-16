// What You Will Create
// Star Wars Web App Using AJAX API
// In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:

// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
// If there is an error getting the data, display a message as follows:
// You can use your own css to style the website as you see fit

const dataProp = [
    'name',
    'height',
    // 'mass',
    // 'skin_color',
    'gender',
    'birth_year',
    'homeworld'
];
const dataArea = document.getElementById('info');

document.getElementById('findButton').addEventListener('click', onClick);

function displayData(data, propArr, dataArea) {
    dataArea.innerHTML = '';   // clear data box
    for (prop of propArr) {
        let tag = prop === 'name' ? 'h1' : 'p';
        let elem = document.createElement(tag);
        elem.innerText = prop === 'name' ? `${data[prop]}` : `${prop}:  ${data[prop]}`;
        dataArea.appendChild(elem)
    }
};

function displayError(dataArea) {
    dataArea.innerHTML = '';   // clear data box
    let elem = document.createElement('h1');
    elem.innerText = 'Oh No! That person isnt available';
    dataArea.appendChild(elem)
}

function displayLoad(dataArea) {
    dataArea.innerHTML = '';   // clear data box
    dataArea.innerHTML = `
    <div class="fa-4x">
        <i class="fa-solid fa-spinner fa-spin-pulse" style="color:white;"></i>
    </div>
    <p>Loading...</p>
    `;
}

async function onClick(e) {
    e.preventDefault();
    displayLoad(dataArea);
    let url = 'https://www.swapi.tech/api/people/';
    let i = Math.round(Math.random() * 90);
    url += i;
    let data = await getData(url);
    let planet_url = data.homeworld;
    let planet_data = await getData(planet_url);
    data.homeworld = planet_data.name;
    displayData(data, dataProp, dataArea);
}

async function getData(url) {
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
                return data.result.properties
            }
            else throw `Response error. Status ${res.status}.`;
    } 
    catch (err) {
        console.log(err);
        displayError(dataArea);
    }
};