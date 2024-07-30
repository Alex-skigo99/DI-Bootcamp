import { useState } from 'react';

function Phone(props) {
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState(2020);

    const changeColor = (event) => {
        setColor("blue")
    }

    const style = {
        color: color,
    }

    return (
        <div>
            <h1 style={{ ...style }}>My phone is a {brand}</h1>
            <h4 style={{ ...style }}>It is a {color} {model} from {year}</h4>
            <button onClick={changeColor}>Change color to Blue</button>
        </div>
    )
};

export default Phone;