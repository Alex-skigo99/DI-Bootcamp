import { useState, useEffect } from 'react';

function Color(props) {
    const [favoriteColor, setfavoriteColor] = useState("red");

    function changeColor() {
        setfavoriteColor('blue')
    };

    useEffect (() => {
        setfavoriteColor('yellow')
    }, []);

    return (
        <>
            <h1 style={{color: favoriteColor}}>My favorite color is: {favoriteColor}</h1>
            <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default Color;