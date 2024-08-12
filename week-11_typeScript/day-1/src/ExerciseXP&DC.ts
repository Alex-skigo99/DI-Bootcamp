// 🌟 Exercise 1: Hello, World! Program
// What You Will Learn:
// How to create a simple TypeScript program.
// How to define and log variables of different types.
// Description: Create a simple “Hello, World!” program in TypeScript.
// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.

console.log('Hello World!');

// 🌟 Exercise 2: Type Annotations
// What You Will Learn:

// How to use type annotations in TypeScript.
// How to define and log variables with specified types.
// Description: Use type annotations to specify the types of variables.
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.

let age: number = 25;
let myName: string = 'Sasha';

console.log('Age:', age, ' Name:', myName);

// 🌟 Exercise 3: Union Types
// What You Will Learn:
// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.

// Instructions
// Define a variable id that can be either a string or a number.

let id: string | number;
id = 45;
console.log('id =', id);
id = 'fghgfhgf';
console.log('id =', id);

// 🌟 Exercise 4: Control Flow With If...Else
// What You Will Learn:
// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Description: Use if...else statements to control the flow of a program.
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.

function typeOfNumber(num: number): string {
    if (num > 0) return 'positive';
    if (num < 0) return 'negative';
    return 'zero';
};

console.log('typeOfNumber 7 - ', typeOfNumber(7));
console.log('typeOfNumber -4 - ', typeOfNumber(-4));
console.log('typeOfNumber 0 - ', typeOfNumber(0));

// 🌟 Exercise 5: Function Overloading
// What You Will Learn:
// How to use function overloading in TypeScript.
// How to define functions that can accept different types of arguments.
// Description: Use function overloading to define a function that can accept different types and numbers of arguments.
// Instructions
// Create a function called add that can add two numbers together or concatenate two strings.

function add(value1: number|string, value2: number|string): number|string {
    if (typeof value1 === 'number') {
        if (Number.isNaN(Number(value2))) return 'Error! value2 not a number!'
        return value1 + Number(value2);
    } else {
        return value1 + value2
    }  
};
console.log('5 + 5 =', add(5,5));
console.log('a + b =', add('a','b'));
console.log('a + 5 =', add('a',5));
console.log('5 + 5str =', add(5,'5'));
console.log('5 + a =', add(5,'a'));

function add2(value1: number, value2: number): number;
function add2(value1: string, value2: string): string;
function add2(value1: any, value2: any): any {
    return value1 + value2;
}

console.log('5 + 5 =', add2(5, 5));
console.log('a + b =', add2('a','b'));

// 🌟 Exercise 6: Tuple Types
// What You Will Learn
// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.
// Description: Use tuple types to define a function that returns multiple values of different types.
// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.

function getDetails(name: string, age: number): [name: string, age: number, greeting: string] {
    return [name, age, `Hello ${name}!`]
};
console.log(getDetails('Peter', 34));

// 🌟 Exercise 7: Object Type Annotations
// What You Will Learn:
// How to use object type annotations in TypeScript.
// How to define the shape of an object using an interface.
// Description: Use object type annotations to define the shape of an object.
// Instructions
// Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.

type Person = {
    name: string,
    age: number
}
function createPerson(name: string, age: number): Person {
    return {name, age}
}
console.log(createPerson('Sara', 19));

// 🌟 Exercise 8: Type Assertions
// What You Will Learn:
// How to use type assertions in TypeScript.
// How to cast variables to specific types when TypeScript cannot infer the type.
// Description: Use type assertions to specify the type of a variable that TypeScript cannot infer.
// Instructions
// Given an HTML element, use a type assertion to cast it to a specific type and access its properties.

let img = document.querySelector('img') as HTMLImageElement;
img ? console.log(img.src) : console.log('There is not such element.');

// 🌟 Exercise 9: Switch Statement With Complex Conditions
// What You Will Learn:
// How to use a switch statement in TypeScript.
// How to handle multiple conditions using complex cases in a switch statement.
// Description: Use a switch statement with complex conditions to determine different behaviors.
// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

type roleTypes = "user" | "superuser" | "admin";

function getAction(role: roleTypes) {
    switch (role) {
        case 'user':
            console.log(`Your role ${role}. Access denied.`);
            break;
        case 'superuser':
            console.log(`Your role ${role}. Wellcome.`);
            break;
        case 'admin':
            console.log(`Your role ${role}. Access restricted.`);
            break;
        default:
            break;
    }
};

getAction('user');
getAction('admin');
getAction('superuser');

// 🌟 Exercise 10: Function Overloading With Default Parameters
// What You Will Learn:
// How to use function overloading in TypeScript.
// How to create overloaded functions with default parameters.
// Description: Create an overloaded function with a default parameter.
// Instructions
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function greeting(): string;
function greeting(name: string): string;
function greeting(name: string = 'guest'): string {
    return `Hello ${name}! Wellcome!`
};

console.log(greeting('John'));
console.log(greeting());

// Daily Challenge: Type Guard With Union Types

// What You Will Learn:
// How to use type guards in TypeScript.
// How to handle different types of inputs from a union type.
// How to perform specific operations based on the input type.
// Time Needed: 30 minutes
// Description: Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.

// Exercise:
// Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:

// If the input is a number, return its square.
// If the input is a string, return the uppercase version of the string.
// If the input is a boolean, return the negated value.

function processInput(input: number): number;
function processInput(input: string): string;
function processInput(input: boolean):boolean;
function processInput(input: any): any {
    switch (typeof(input)) {
        case 'number':
            return input**2;
        case 'string':
            return input.toUpperCase();
        case 'boolean':
            return !input;
        default:
            break;
    }
};
console.log('-------- DC ----------');
console.log('5', processInput(5));
console.log('hello -', processInput('hello'));
console.log('false -', processInput(false));