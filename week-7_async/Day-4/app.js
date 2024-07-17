function hello(){
    console.log('Hello to node.js from app.js')
};

// module.exports = {
//     hello
// };

// const math = require('./math');
import {sum, div, subt, mult} from "./math.js";

console.log(sum(4,2));
console.log(div(4,2));
console.log(subt(4,2));
console.log(mult(4,2));
