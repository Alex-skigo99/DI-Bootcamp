const express = require('express');
const {products} = require('./config/data.js')
const app = express();

let users = [
    {name:'John',age:25},
    {name:'Mike',age:27},
    {name:'Rici',age:40},
];
app.listen(5001, () => {
    console.log('run on 5001')
});

app.use('/', express.static(__dirname + '/public'));

app.get('/users', (req, res) => {
    res.json(users)
});
app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/products/:id', (req, res) => {
    console.log(req.params);
    let {id} = req.params;
    let product = products.find((item) => item.id == id)
    if (!product) return res.sendStatus(404)
    res.json(product);
});

app.get('/api/search', (req, res) => {
    console.log(req.query);
    let {name} = req.query;
    let products_filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    });
    if (products_filtered.length === 0) return res.sendStatus(404);
    res.json(products_filtered);

});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});
