import { useState } from 'react';

function Button(props) {
    const {setCount} = props;
    return (
        // <button onClick={() => action()}>Add</button>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
    )
};

export default Button;