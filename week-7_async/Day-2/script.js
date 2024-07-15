let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e);
    });

let url_post = 'https://jsonplaceholder.typicode.com/posts';

let body = {
    userID: 4,
    title: 'my title 3',
    body: 'bla bla'
};

let options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(body)
}

fetch(url_post, options)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e);
    });

/**
1.  Create an HTML form in your index.html file with inputs for name, username, and email, 
and a submit button.
2. When the form is submitted, send a POST request to https://users-18kl.onrender.com/userjson 
with a JSON data, example
{name:'...',username:'...', email:'...'}.
3. Display the response data on the page.
 */

const url_form = 'https://users-18kl.onrender.com/userjson';

document.getElementById('myForm').addEventListener('submit', submit);

function submit(e) {
    e.preventDefault()
    let data = new FormData(e.target);
    console.log(data);
    // let body = {
    //     name: myForm.name.value,
    //     username: myForm.username.value,
    //     email: myForm.email.value
    // };
    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data))
    }
    console.log(options.body);
    // fetch(url_form, options)
    // .then(res => {
    //     return res.json();
    // })
    // .then(data => {
    //     render(data)
    // })
    // .catch((e) => {
    //     console.log(e);
    // });
}

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>${item.name} ${item.username} ${item.email}</div>`
    })
    document.getElementById('root').innerHTML = html.join('')
};

// async.  await
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// const info = async(url) => {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// };

// info('https://jsonplaceholder.typicode.com/users')
//     .then(users => console.log(users));
