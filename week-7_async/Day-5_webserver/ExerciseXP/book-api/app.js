const express = require('express');
const app = express();

app.listen(5001, () => {
    console.log('run on 5001')
});

app.use(express.json());  // parse body data for POST, PUT

const data = [
    {id: 1, title:'Book 1', author: 'Author 1', publishedYear: 1990},
    {id: 2, title:'Book 2', author: 'Author 2', publishedYear: 2007},
    {id: 3, title:'Book 3', author: 'Author 2', publishedYear: 2001}
];
const dataKeysToValid = Object.keys(data[0]); // array of POST,PUT required keys
dataKeysToValid.shift();

function ValidDataItem(dataInput, dataKeys) {
    let dataInputKeys = Object.keys(dataInput);
    let missingKeys = [];
    let isVal = true;
    dataKeys.forEach(key => {
        if (!dataInputKeys.includes(key)) {
            isVal = false;
            missingKeys.push(key);
        };
    });
    return {isValid: isVal, missing: missingKeys};
};

app.get('/books', (req, res) => {   
    res.json(data)
});

app.get('/books/:id', (req, res) => {
    let {id} = req.params;
    let post = data.find((item) => item.id == id)
    if (!post) return res.status(404).send(`Post (id:${id}) not found`)
    res.json(post);
});

app.post('/books', (req, res) => {
    let inputData = req.body;
    let newId = data.length + 1;
    let {isValid, missing} = ValidDataItem(inputData, dataKeysToValid);
    if (!isValid) res.status(400).send(`Data (${missing}) is missing in request`);
    const newItem = {id: newId}; // set new id
    for (let [key, value] of Object.entries(inputData)) newItem[key] = value;
    data.push(newItem);
    res.status(201).json(newItem);
});

app.put('/books/:id', (req, res) => {
    let {id} = req.params;
    console.log(id);
    let index = data.findIndex((item) => item.id == id)
    console.log(index);
    if (index === -1) return res.status(404).send(`Post (id:${id}) not found`);
    let inputData = req.body;
    let {isValid, missing} = ValidDataItem(inputData, dataKeysToValid);
    if (!isValid) res.status(400).send(`Data (${missing}) is missing in request`);
    const newItem = {id: id};  // set id from request
    for (let [key, value] of Object.entries(inputData)) newItem[key] = value;
    data[index] = newItem;
    res.status(200).json(newItem);
});

app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = data.findIndex((item) => item.id == id);
    if (index === -1) return res.status(404).send(`Post (id:${id}) not found`);
    data.splice(index, 1);
    res.status(204).json('Post deleted');
});
