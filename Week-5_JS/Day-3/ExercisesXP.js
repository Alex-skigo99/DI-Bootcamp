// 🌟 Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

function displayNumbersDivisible() {
    let outcome = [];
    for (i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            outcome.push(i);
        }
    };
    let sum = outcome.reduce(function (a, b) {return a + b;}, 0);
    return {'outcome': outcome, 'sum': sum}
};

result = displayNumbersDivisible();
for (x in result) {
    console.log(`${x}: ${result[x]}`)
};

// Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum
function displayAnyNumbersDivisible(num) {
    let outcome = [];
    for (i = 0; i <= 500; i++) {
        if (i % num === 0) {
            outcome.push(i);
        }
    };
    let sum = outcome.reduce(function (a, b) {return a + b;}, 0);
    return {'outcome': outcome, 'sum': sum}
};
// let num = prompt("Input number: ")
let num = 25;
result = displayAnyNumbersDivisible(num);
console.log('numbers and sum divisible by ', num)
for (x in result) {
    console.log(`${x}: ${result[x]}`)
};


// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};
for (x in stock) {
    console.log(`${x}: ${stock[x]}`);
};

// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

function myBill() {
    let total_price = 0;
    for (item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total_price += prices[item];
            stock[item] -= 1;
        };
    };
    return total_price;
};

total_price = myBill();
console.log(`Total price: ${total_price}`);
for (x in stock) {
    console.log(`${x}: ${stock[x]}`);
};

// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true
function changeEnough(itemPrice, amountOfChange) {
    let nominals = [0.25, 0.1, 0.05, 0.01];
    wallet_sum = 0;
    for (i = 0; i < 4; i++) {
        wallet_sum += amountOfChange[i] * nominals[i];
    };
    return itemPrice <= wallet_sum;
};

console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))

// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost() {
    let cost_per_night = 140;
    do {
    night_n = Number(prompt('Number of nights?'));
    } while (night_n == null || isNaN(night_n));
    return night_n * cost_per_night;
};

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost() {
    let destination
    let rideCost = {
        'london': 183,
        'paris': 220
    };
    do {
        destination = prompt('Input your destination?');
        } while (night_n == null);
    destination = destination.toLowerCase();
    if (destination in rideCost) {
        return rideCost[destination];
    }
    return 300;
};

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost() {
    let cost_per_day = 40;
    do {
        days_n = prompt('Number of days to rent a car?');
        console.log(days_n, typeof days_n)
        } while (days_n == null || isNaN(days_n));
    let rentalCost = cost_per_day * days_n;
    if (days_n > 10) {
        rentalCost *= 0.95;
    }
    return rentalCost; 
};

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
    let r = rentalCarCost();
    let h = hotelCost();
    let p = planeRideCost();
    console.log(`The car cost: ${r}, the hotel cost: ${h}, the plane tickets cost: ${p}`);
    console.log(`Total vacation cost: ${r + h + p}`);
}

// Call the function totalVacationCost()
// totalVacationCost();

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
let divs = document.getElementsByTagName('div');
console.log(divs[0]);

// Change the name “Pete” to “Richard”.
let li = document.getElementsByTagName('li');
li[1].innerText = 'Richard';

// Delete the second <li> of the second <ul>.
li[3].remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
let uls = document.getElementsByTagName('ul');
for (ul of uls) {
    ul.firstElementChild.innerText = 'Sasha';
};

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// let elems = document.getElementsByTagName('ul')
for (elem of document.getElementsByTagName('ul')) {
    elem.classList.add('student_list');
};

// Add the classes university and attendance to the first <ul>.
document.getElementsByClassName('list')[0].classList.add('university', 'attendance');

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
document.getElementById('container').style.backgroundColor = "lightblue";

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
document.getElementsByTagName('ul')[1].lastElementChild.style.display = 'none';

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
document.getElementsByTagName('ul')[0].lastElementChild.style.border = '1px solid red';

// Change the font size of the whole body.
document.body.style.fontSize = '2em';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// 🌟 Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
