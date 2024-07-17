import { getInfo } from "./info.js";

let url = 'https://jsonplaceholder.typicode.com/users';

getInfo(url)
    .then(users => console.log(users));
