import { useState } from 'react';

function Garage(props) {
    const { size } = props;
    // const [color, setColor] = useState('blue');

    return (
        <h3>Who lives in my {size} Garage?</h3>
    )
};

export default Garage;