import { greet } from "./greeting.js";
import { colorPrint } from "./colorful-message.js";
import { readFile } from "./files/read-file.js";

greet('Sasha');
colorPrint('Hello world!')
console.log(readFile('files/file-data.txt'));
