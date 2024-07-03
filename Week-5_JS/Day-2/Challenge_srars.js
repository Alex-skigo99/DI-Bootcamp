// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let str = '';
let sim = ' *';

for (let j = 1; j <= 6; j++) {
    str += sim;
    console.log(str);
};


for (let i = 1; i <= 6; i++) {
    str = '';
    for (let j = 1; j <= i; j++) {
        str += sim;
    };
    console.log(str)
};