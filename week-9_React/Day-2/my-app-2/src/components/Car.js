import { useState } from 'react';
import Garage from './Garage';

function Car(props) {
    const { name, model } = props;
    const [color, setColor] = useState('blue');

    return (
        <>
        <Garage size="small" />
        <h2 style={{color: color}}>This car is {name}, model: {model}, color: {color}.</h2>
        </>
    )
};

export default Car;