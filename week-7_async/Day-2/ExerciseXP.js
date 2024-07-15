// render array of object to DOM -- not mandatory!
const render = (arr, html_obj) => {
    console.log(arr);
    const html = arr.map((item) => {
        div = '<div>';
        for (let [key, value] of Object.entries(item)){
            div += `<b>${key}</b>: ${value}   `
        }
        div += '<div>';
        return div
    });
    html_obj.innerHTML = html.join('<br>')
};

// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code
// You will work with this part of the documention
// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries
// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs
// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation
// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

// Output Example:
// output

const url_giphy = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; 

const get_data = async(url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        if (data.meta.status === 200) {
            render(data.data, document.getElementById('container'));
        }
        else throw `Response error. Status ${data.meta.status}. ${data.meta.msg}`;
    } 
    catch (err) {
        console.log(err)
    }
};

get_data(url_giphy);


// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

const url_sun = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; 

get_data(url_sun);


// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

// Expected Output:
// output
const url_swapi = 'https://www.swapi.tech/api/starships/9/'; 

const get_data_swapi = async(url) => {
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
            console.log(data.result)
        }
        else {
            throw 'Response error.'
        };
    } 
    catch(err) {
        console.log(err)
    }
};

get_data_swapi(url_swapi);


// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling -> resolved after 2 sec.
