// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// inside the funcOne function 3

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// nothing, upsss... an error appeard

// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()

// 0, 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//0, an error appeard

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// 5

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
const b = 1;
function funcSix() {
    const b = "test";
    alert(`inside the funcSix function ${b}`);
}
// test - second b is the same scope with alert

// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// an error, upsss...all is work

//#5
const c = 2;
if (true) {
    const c = 5;
    alert(`in the if block ${c}`);
}
alert(`outside of the if block ${c}`);

// #5.1 - run the code in the console

// 5, 2 - there are deferent variables with the same name

// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// an error. Upsss.... al is work.

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
let winBattle = () => true;

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
let experiencePoints = winBattle() ? 10 : 1;

// Console.log the experiencePoints variable.
console.log(experiencePoints);

// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
let isString = (s) => typeof s === 'string';

// Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let sumAB = (a,b) => a + b;

console.log(sumAB(5,8));

// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function kgToGrams(kg) {
    return kg * 1000
}
console.log(kgToGrams(3));

// Then, use function expression and invoke it.
let kgToGrams2 = function(kg) {return kg * 1000};
console.log(kgToGrams2(6));

// Write in a one line comment, the difference between function declaration and function expression.
// you can call function expression only after declaration.

// Finally, use a one line arrow function and invoke it.
let kgToGrams3 = (kg) => kg * 1000;
console.log(kgToGrams3(9));


// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numChildren, pName, geoLoc, job) {
    if (arguments.length == 4) {
        let p = document.createElement('p');
        p.innerText = `You will be a ${job} in ${geoLoc}, and married to ${pName} with ${numChildren} kids.`
        document.body.appendChild(p);
        return true
    };
    alert("Invalid arguments number.")
    return false
})(3, 'Mihkal', 'Haifa', 'frontend developer');


// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (name) {
    nav = document.getElementsByTagName('nav')[0];
    img = document.createElement('img');
    img.src = 'rabbit.jpeg';
    nav.appendChild(img);
    h3 = document.createElement('h3');
    h3.innerText = name;
    nav.appendChild(h3);
})('Sasha Bolshukhin')


// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size) {
    function addIngredients (ing_1, ing_2, ing_3) {
        let p = document.createElement('p');
        p.innerText = `The client wants a ${size} juice, containing ${ing_1}, ${ing_2}, ${ing_3}`;
        document.body.appendChild(p)
    }
    return addIngredients
}
makeJuice('medium')('orange', 'vodka', 'ice')

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice2(size) {
    let ingredients = [];
    function addIngredients (ing_1, ing_2, ing_3) {
        for (ing of arguments) ingredients.push(ing);
    }
    function displayJuice() {
        let p = document.createElement('p');
        let text = `The client wants a ${size} juice, containing `;
        let l = ingredients.length;
        for (i in ingredients) {
            text += ingredients[i];
            if (i < l - 1) text += ', '
            else text += '.';
        }
        p.innerText = text;
        document.body.appendChild(p)
    }
    addIngredients('orange', 'vodka', 'ice');
    addIngredients('charry', 'campary', 'mint')
    displayJuice()
}
makeJuice2('medium')
