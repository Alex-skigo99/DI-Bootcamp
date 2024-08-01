import React from 'react';

class Example3 extends React.Component {
    constructor (props) {
        super(props);
        this.data = props.data;
    }
    render () {
    return (<>
        {this.data.map((company, i) => { return(
            <div key={i}>
                <img src={company.logo} alt="logo" />
                <h2><a href={company.url}>{company.companyName}</a></h2>
                <h3>{company.roles[0].title}</h3>
                <p>{company.roles[0].startDate}{company.roles[0].location}</p>
                <p>{company.roles[0].description}</p>
            </div>
        )})}
    </>)}  
};

export default Example3;