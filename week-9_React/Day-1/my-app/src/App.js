// Exercise 1: With JSX
// Instructions
// In the App.js file, display a “Hello World!” message in a paragraph.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"


// Exercise 2 : Object
// Instructions
// Using the following object:

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };
// In the App.js file, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.
// In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
// Each <li> corresponds to one animal from the favAnimals array.
// Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item


// Exercise 3 : HTML Tags In React
// Instructions
// PART I:

// In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.

// Expected Output:(without the grey border)

// PART II:

// Add the below object to the component Exercise. Use this object to style the <h1>.
// const style_header = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };

// PART III:

// Create a new css file named Exercise.css and import it in your Exercise component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
// .para {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }

import "./App.css";
import UserFavoriteAnimals from "./components/UserFavoriteAnimals";
import Exercise from "./components/Exercise3";
import Carousel4 from "./components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  return (
    <> 
    <p>Hello World</p>
    {myelement}
    <p>"React is {sum} times better with JSX"</p>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    <ul>
      {user.favAnimals.map((animal, id) => <UserFavoriteAnimals key={id} animal={animal}/>)}
    </ul>
    <Exercise />
    <Carousel4 />
    </>
  );
}

export default App;
