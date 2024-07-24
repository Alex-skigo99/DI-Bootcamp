const fs = require('fs');
const dataFile = './tasks.json';

// task  - {id, text, done: bool}
// [{"id": 1, "text": "text text", "done": false}]
// {"lastID":0, "tasks":[]}

function _getAllData() {
    try {
        let data = fs.readFileSync(dataFile);
        let result = JSON.parse(data);
        return result        
    } catch (err) {
        console.log('error reading from file');
        throw err
    }
};

function _getAllTasks() {
    try {
        let result = _getAllData();
        return result.tasks       
    } catch (err) {
        console.log('error reading from file');
        throw err
    }
};

function _getTask (id) {
    let data = _getAllTasks();
    let task = data.find((item) => item.id == Number(id));
    if (task === undefined) {
        throw `Task with id:${id} not found`
    }
    return task
};

function _createTask (text, done) {
    let data = _getAllData();
    data.lastID += 1;
    let id = data.lastID;
    let newTask = {id, text, done};  
    data.tasks.push(newTask);
    let newData = JSON.stringify(data);
    fs.writeFile(dataFile, newData, err => {
        if(err){
            console.log('error writing to file');
            throw err
        }});
    return newTask
};

function _deleteTask (id) {
    let data = _getAllData();
    let i = data.tasks.findIndex((item) => item.id == Number(id));
    if (i === -1) {
        throw `Task with id:${id} not found`
    }
    let newTasks = data.tasks.filter((item) => item.id !== Number(id));
    console.log(newTasks);
    data.tasks = newTasks;
    fs.writeFileSync(dataFile, JSON.stringify(data));
    return {message: `Task with id:${id} deleted`}
};

function _updateTask (id, text, done) {
    let data = _getAllData();
    let i = data.tasks.findIndex((item) => item.id == Number(id));
    console.log(i);
    if (i === -1) {
        throw `Task with id:${id} not found`
    }
    console.log(text, done);
    if (text !== undefined) data.tasks[i].text = text;
    if (done !== undefined) data.tasks[i].done = done;
    fs.writeFileSync(dataFile, JSON.stringify(data));
    return data.tasks[i]
};

module.exports = {
    _getAllTasks,
    _getTask,
    _createTask,
    _updateTask,
    _deleteTask
}
