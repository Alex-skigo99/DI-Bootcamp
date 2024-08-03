import { useState } from 'react';

function Calculator() {
    const [valueA, setValueA] = useState();
    const [valueB, setValueB] = useState();
    const [sum, setSum] = useState();

    const calcSum = (e) => {
        e.preventDefault();
        setSum(valueA + valueB);
    }
    const calcValueA = (e) => setValueA(Number(e.target.value));
    const calcValueB = (e) => setValueB(Number(e.target.value));

    return (
        <div id="calc">
            <h1>Calculator</h1>
            <div className="main_area">
                <h3>Adding two numbers</h3>
                <form>
                    <input type="number" onChange={(e) => calcValueA(e)} />
                    <input type="number" onChange={(e) => calcValueB(e)} />
                    <input type='submit' onClick={(e) => calcSum(e)} value='Add them' />
                </form>
                {sum ? <h1>{sum}</h1> : ''}
            </div>
        </div>
    );
}

export default Calculator;
