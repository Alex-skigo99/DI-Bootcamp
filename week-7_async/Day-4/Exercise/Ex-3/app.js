import { readFile, writeFile } from "./fileNanager.js";

console.log(readFile('Hello_world.txt'));
writeFile('Bye_world.txt', 'Writing to the file');
