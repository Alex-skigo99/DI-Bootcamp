// Instructions
// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
function displayGroceries() {
    groceries.fruits.forEach((elem) => console.log(elem));
}
displayGroceries()
// Create another arrow function named cloneGroceries.
function cloneGroceries() {
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
    let user = client;
    console.log(client, user)

// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    client = 'Betty';
    console.log(client, user)

// In the function, create a variable named shopping that is equal to the groceries variable.
    let shopping = {...groceries};

// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    console.log('before changing')

    console.log(groceries);
    console.log(shopping);

    // no, because it is another object

// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    console.log('after changing')
    console.log(groceries);
    console.log(shopping);
};
    // yes, because it is a property of the same inner object

// Invoke the cloneGroceries function.
cloneGroceries();

