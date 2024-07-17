import { persons } from "./data.js";

function avgAge(pers) {
    let sum_age = 0;
    for (let each of pers) {
        sum_age += each.age
    }
    return sum_age / pers.length
};

console.log(avgAge(persons));
