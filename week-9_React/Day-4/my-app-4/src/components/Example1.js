import React from 'react';

class Example1 extends React.Component {
    constructor (props) {
        super(props);
        this.data = props.data;
    }
    render () {
        return (<>
            <ul>
                {this.data.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </>)}
}

export default Example1;