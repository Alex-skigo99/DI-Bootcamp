// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const view = document.getElementById('container');
document.searchForm.addEventListener('submit', submit);
document.getElementById('delAll_btn').addEventListener('click', deleteAll);

function getUrl(q) {
    return `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${q}`
};

function render_gif(imageSrc, view) {
    let div = document.createElement('div');
    div.innerHTML = `<img src="${imageSrc}" alt="Giphy" width="200" height="200">`;
    let delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.innerText = 'DELETE';
    div.appendChild(delBtn);
    delBtn.addEventListener('click', deleteGif);
    view.appendChild(div);
};

function deleteGif(e) {
    e.target.parentElement.innerHTML = '';
};

function deleteAll() {
    view.innerHTML = '';
};

async function submit(e) {
    e.preventDefault();
    let q = e.target.searchText.value;
    let gifCollect = await getData(getUrl(q));
    let i = Math.round(Math.random() * 50);
    let imageSrc = gifCollect[i].images.downsized.url;
    render_gif(imageSrc, view);
};

const getData = async(url) => {
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
            return data.data
        }
        else throw `Response error. Status ${data.meta.status}. ${data.meta.msg}`;
    } 
    catch (err) {
        console.log(err)
    }
};
