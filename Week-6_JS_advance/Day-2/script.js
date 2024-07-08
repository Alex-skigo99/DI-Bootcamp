const testCases = [
    { input: "aabbb", output: true },
    { input: "ba", output: false },
    { input: "aaa", output: true },
    { input: "b", output: true },
    { input: "abba", output: false },
    { input: "a", output: true },
    { input: "bbaa", output: false },
    { input: "bbba", output: false },
    { input: "aabb", output: true },
    { input: "bababab", output: false },
    { input: "babababa", output: false },
    { input: "aabababb", output: false },
    { input: "baaab", output: false },
    { input: "bbabbabbababbab", output: false },
    { input: "babaabaaab", output: false },
    { input: "ab", output: true },
    { input: "ababa", output: false },
  ];
  

function solution(str) {
    if (str.includes('a') && str.includes('b')) return !str.includes('ba')
    else return true
};

function testSolution() {
    for (let i = 0; i < testCases.length; i++) {
      const { input, output } = testCases[i];
      const result = solution(input);
      console.log(
        `Input: "${input}", Output: ${result}, Expected Output: ${output} Result: ${
          result === output ? "OK" : "NOT OK"
        }`
      );
    }
  }
  testSolution();

let users = ['Mary', 'Anna', 'John', 'Dan'];
email_end = '@gmail.com';
pointer = [];
users.forEach((user, i, pointer) => {
    // user += email_end
    pointer[i] = user + email_end
    pointer.push(user + email_end)
});

console.log(users);

let users2 = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 4, name: "Orr", email: "aaa@gmail.com" },
  ];

let messeges = users2.map((user) => {
    return `<div>User ${user.name} has email ${user.email}</div>`;    
});
console.log(messeges);
document.getElementById('root').innerHTML = messeges.join('');

let arr1 = [0, 1, 1, 2, 3, 4, 5, 8];
let arr2 = [];
arr2 = arr1.filter((item) => {
    return item > 3;
});
console.log(arr2)

let users3 = users2.filter((user) => {
    return user.name.toLowerCase().includes('o')
});

console.log(users3);

let candels = [2, 8, 4, 4, 8, 1, 8];
let maxCandel = Math.max(...candels);
console.log(maxCandel);


