console.log('hello from script.js');

fetch('http://localhost:5001/users')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
