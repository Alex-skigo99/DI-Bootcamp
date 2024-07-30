// Daily challenge

import { useState, useEffect } from 'react';

function Vote(props) {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]);

    const addVote = (event) => {
        const newLang = languages.map((item, id) => {
            return {name: item.name, votes: (id === Number(event.target.id)) ? item.votes + 1 : item.votes}
        });
        setLanguages(newLang);
    };

    // useEffect(() => {}, [languages]);

    const click = {
        color: 'green',
        cursor: 'pointer'
    };
    const btn = {
        fontSize: '2em',
        backgroundColor: 'blanchedalmond',
        padding: '30px',
        width: '400px',
        margin: '2px'
    };

    return (
        <div>
            {languages.map((item, id) => (
                <div key={id}>
                     <button style={{...btn}}>{item.votes}  {item.name} <span id={id} onClick={addVote} style={{...click}}>Click here</span></button>
                     <br />
                </div>
            ))}
        </div>
    )
};

export default Vote;