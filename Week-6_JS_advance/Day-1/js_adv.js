let year = 2004;
let input = (year <= 2000) ? "You are in the 20th century." : "21st century now.";
console.log(input);

let calculate = (a, b, operator) => 
    operator === '+' ? a + b :
    operator === '-' ? a - b :
    operator === '*' ? a * b :
    operator === '/' ? b !== 0 ?  a * b : "division by 0" :
    'invalid operator';

console.log(calculate(2, 0, "/"));

const sum = (num) => num * 2;
const sum1 = (num) => num + 1;

const sumsum = (a,b) => (c) => a(b(c));

console.log(sumsum(sum, sum1)(6)); // 14
console.log(sumsum(sum1, sum)(6)); // 13
console.log(sumsum(sum1, sum1)(6)); // 8
console.log(sumsum(sum, sum)(6)); // 24

let user = {
    name: 'john',
    last: 'Doe',
    address: {
        city: 'Tel Aviv'
    }
}

let user2 = {...user};
user2.address = {...user.address}
user2.last = 'Tahl';
console.log(user, user2);
user2.address.city = 'Haifa';
console.log(user, user2);
