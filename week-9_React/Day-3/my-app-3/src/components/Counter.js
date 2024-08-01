// **
//  * 1. Create a Counter component:
//  *    - This component should have a state variable named 'count' initialized to 0.
//  *    - Display the value of 'count' in the Counter component.
//  *
//  * 2. Create a Button component:
//  *    - This component should increase the 'count' by one each time it is clicked.
//  *
//  * 3. Use the Counter in App, Button components in Counter.
//  */
import { useState } from 'react';
import Button from './Button';

const Counter = (props) => {
    console.log(props);
    //   const [count, setCount] = useState(0);
    const { count, setCount } = props;
    return (
        <>
            <h2>Counter</h2> {count} <Button setCount={setCount} />
        </>
    );
};

// function Counter(props) {
//     const [count, setCount] = useState(0);

//     const add = () => {
//         setCount(count + 1)
//     };

//     return (
//         <div>
//             <h2>Counter</h2>
//             <p >{count}</p>
//             <Button action={add} />
//         </div>
//     )
// }

export default Counter;