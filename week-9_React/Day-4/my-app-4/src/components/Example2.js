import React from 'react';

class Example2 extends React.Component {
    constructor (props) {
        super(props);
        this.data = props.data;
    }
    render () {
    return (<>
        {this.data.map((item, i) => { return(
        <div key={i}>
            <h3>{item.Area}</h3>
            {item.SkillSet.map((skill, j) => <li key={j}>{skill.Name}</li>)}
        </div>
        )})}
    </>)}  
}

export default Example2;