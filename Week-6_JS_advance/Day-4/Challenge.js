// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:

// output
// {"name":"John","lastname":"Doe"}

// console.log(document.myForm.name);
const form = document.myForm;
let data = {}
document.getElementById('send_btn').addEventListener('click', send)

function send(e) {
    e.preventDefault()
    data.name = form.name.value;
    data.lastname = form.lastname.value;
    let p = document.createElement('p');
    p.innerText = JSON.stringify(data);
    document.body.appendChild(p)
}
