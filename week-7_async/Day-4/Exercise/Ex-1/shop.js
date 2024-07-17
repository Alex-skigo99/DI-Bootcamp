const {products} = require('./products.js');

function getProduct(name) {
    for (prod of products) {
        if (prod.name === name) return prod
    }
    return undefined
};

console.log(getProduct('iphone 14'));
console.log(getProduct('iphone 16'));
