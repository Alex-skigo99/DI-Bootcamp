const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('run on 3000')
});

app.use(express.json());

const data = [
    {id: 1, title:'Post 1', content:'Some content about fotball.'},
    {id: 2, title:'Post 2', content:'Some content about wild.'},
    {id: 3, title:'Post 3', content:'Some content about culture.'},
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

app.get('/posts', (req, res) => {
    res.json(data)
});

app.get('/posts/:id', (req, res) => {
    let {id} = req.params;
    let post = data.find((item) => item.id == id)
    if (!post) return res.status(404).send(`Post (id:${id}) not found`)
    res.json(post);
});

app.post('/posts', (req, res) => {
    let inputData = req.body;
    let newId = data.length + 1;
    let {isValid, missing} = ValidDataItem(inputData, dataKeysToValid);
    if (!isValid) res.status(400).send(`Data (${missing}) is missing in request`);
    const newItem = {id: newId}; // set new id
    for (let [key, value] of Object.entries(inputData)) newItem[key] = value;
    // const newItem = {...inputData, id:data.length+1};
    data.push(newItem);
    res.status(201).json(newItem);
});

app.put('/posts/:id', (req, res) => {
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

app.delete('/posts/:id', (req, res) => {
    let {id} = req.params;
    let index = data.findIndex((item) => item.id == id);
    if (index === -1) return res.status(404).send(`Post (id:${id}) not found`);
    data.splice(index, 1);
    res.status(204).json('Post deleted');
});
