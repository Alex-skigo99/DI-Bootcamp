// Instructions
// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
let usernames = [];
gameInfo.forEach(user => {
    usernames.push(`${user.username}!`)
});
console.log(usernames);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :
// const winners = ["becky", "susy"]
let usernames2 = [];
gameInfo.forEach(user => {
    if (user.score > 5) usernames2.push(user.username)
});
console.log(usernames2);

// 3. Find and display the total score of the users. (Hint: The total score is 71)
let total_score = gameInfo.map(user => user.score).reduce((total, item) => total + item);
console.log(total_score);
