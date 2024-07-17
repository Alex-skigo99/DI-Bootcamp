import fs from 'fs';

export function readFile(file_name) {
    return fs.readFileSync(file_name, 'utf-8');
};

export function writeFile(file_name, data) {
    fs.writeFile(file_name, data, 'utf-8', (err) => {
        if (err) return console.log(err.message);
    });
};
