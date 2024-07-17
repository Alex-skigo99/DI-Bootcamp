import fs from 'fs';

export function readFile(file_name) {
    return fs.readFileSync(file_name, 'utf-8');
};
