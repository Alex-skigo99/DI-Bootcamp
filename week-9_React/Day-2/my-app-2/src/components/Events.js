import { useState } from 'react';

function Events(props) {

    const [isToggleOn, setToggleOn] = useState(true);

    const clickMe = () => {
        alert('I was clicked')
    };
    
const toggle = () => {
        setToggleOn(!isToggleOn);
    };
    
    const handleKeyDown = (event) => {
        // console.log(event);
        if (event.key == 'Enter') {
            alert('The Enter key was pressed. The value is: ' + event.target.value)
        }
    };
    
    return (
        <>
            <button onClick={clickMe}>Click Me</button> <br />
            <input type="text" onKeyDown={handleKeyDown} /> <br />
            <button onClick={toggle}> {isToggleOn ? "ON" : "OFF"}</button>
        </>
    )
};

export default Events;