// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.
console.log(document.getElementsByTagName('h1')[0].innerText);

// Using DOM methods, remove the last paragraph in the <article> tag.
document.getElementsByTagName('article')[0].lastElementChild.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
document.getElementsByTagName('h2')[0].addEventListener('click', function(e) {
    e.target.style.backgroundColor = 'red';
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
document.getElementsByTagName('h3')[0].addEventListener('click', function(e) {
    e.target.style.display = 'none';
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
btn = document.createElement('button');
btn.innerText = 'Bold font'
document.getElementsByTagName('article')[0].appendChild(btn);
btn.addEventListener('click', function(e) {
    if (btn.innerText == 'Bold font') {
        fw = 'bold';
        btn.innerText = 'Normal font'
    }
    else { 
        fw = '';
        btn.innerText = 'Bold font'
    };
    for (p of document.querySelectorAll('article p')) {
            p.style.fontWeight = fw;
        }   
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.
console.log(document.getElementsByTagName('form')[0]);

// Retrieve the inputs by their id and console.log them.
console.log(document.getElementById('fname'));
console.log(document.getElementById('lname'));
console.log(document.getElementById('submit'));

// Retrieve the inputs by their name attribute and console.log them.
console.log(document.getElementsByName('firstname'));
console.log(document.getElementsByName('lastname'));

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// document.getElementById('submit').addEventListener('submit', submitFunc);
function submitFunc(e) {
    e.preventDefault()
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    if (firstName.trim() !== '' && lastName.trim() !== '') {
        console.log(firstName, lastName)
        let f_name = document.createElement('li');
        f_name.innerText = firstName;
        let l_name = document.createElement('li');
        l_name.innerText = lastName;
        let ul = document.createElement('ul');
        ul.classList.add('usersAnswer');
        document.body.appendChild(ul);
        ul.appendChild(f_name);
        ul.appendChild(l_name);
    };
};

// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:
// Declare a global variable named allBoldItems.
let allBoldItems;

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    allBoldItems = document.querySelectorAll('body > p strong');
};

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    for (item of allBoldItems) {
        item.style.color = 'blue';
    }   
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault(){
    for (item of allBoldItems) {
        item.style.color = 'black';
    }   
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
getBoldItems()
paragraph = document.querySelector('body > p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
        // <style>  
        //     body {
        //         padding-top:30px;
        //     } 

        //     label,input {
        //         display:block;
        //     }  
        // </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

let myForm = document.getElementById('MyForm');
document.getElementById('submit_2').addEventListener('click', function(e) {
    e.preventDefault();
    let radius = myForm.elements['radius'].value;
    myForm.elements['volume'].value = 4 / 3 * Math.PI * radius**3;
})
