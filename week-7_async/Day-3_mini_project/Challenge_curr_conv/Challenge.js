// Instructions
// You will create a currencies converter:

// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// Create your own API key by signing up - you will be able to make more requests :)

// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive,
//  as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.
// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. 
// Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. 
// Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

const codesUrl = 'https://v6.exchangerate-api.com/v6/08b3da07bf53731dca4c1b09/codes';
const pairUrl = 'https://v6.exchangerate-api.com/v6/08b3da07bf53731dca4c1b09/pair' // /EUR/GBP/amount

document.mainForm.addEventListener('submit', convert);
document.getElementById('switch').addEventListener('click', switchCurr);

async function getCodesCollection(url) {
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
            return data.supported_codes;
            }
            else throw `Response error. Status ${res.status}.`;
    } 
    catch (err) {
        console.log(err);
    }
};

async function getConversionResult(url) {
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
            return data.conversion_result;
            }
            else throw `Response error. Status ${res.status}.`;
    } 
    catch (err) {
        console.log(err);
    }
};

function renderDatalist(container, collection) {
    for (curr of collection) {
        let option = document.createElement('option');
        option.value = curr[0];
        option.innerText = curr[1];
        container.appendChild(option);
    }
};

function renderResult(result, currency) {
    document.getElementById('result').value = result;
    document.getElementById('result_curr').innerText = currency;  
};

async function start() {
    let collection = await getCodesCollection(codesUrl);
    renderDatalist(document.getElementById('from_list'), collection);
    renderDatalist(document.getElementById('to_list'), collection);
};

async function convert(e) {
    e.preventDefault()
    let base_code = e.target.from.value;
    let target_code = e.target.to.value;
    let amount = e.target.amount.value;
    let url = pairUrl + `/${base_code}/${target_code}/${amount}`
    let result = await getConversionResult(url);
    renderResult(result, target_code)
};

function switchCurr() {

    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let from_curr = from.value;
    from.value = to.value;
    to.value = from_curr;
};

start();
