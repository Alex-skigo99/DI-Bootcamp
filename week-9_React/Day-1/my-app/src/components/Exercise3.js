import React from "react";
import ReactDOM from 'react-dom';
import "./Exercise.css";

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };  

//paragraph, a link, a form, an image and a list
class Exercise extends React.Component {
    render() {
        return (
            <div id='exercise'>
            <h1 style={{
                color: 'red',
                backgroundColor: 'lightblue'
            }}>This is a Header</h1>
            <h1 style={style_header}>Another Haeder</h1>
            <p className="para">This is paragraph</p>
            <a href="http://localhost:3001">This is a link</a>
            <form>
                <h3>This is a form</h3>
                <label htmlFor="i1">Enter your name</label>
                <input type="text" name="i1" id="i1" />
            </form>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxjpNRTS8lgTN2AFMdpsBwvF5zguP2PJL-g&s" alt="react" />
            <ul>
                <h3>This is a list</h3>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            </div>
        )
    }
};

export default Exercise;