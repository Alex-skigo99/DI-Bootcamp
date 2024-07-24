const {
    _getAllTasks,
    _getTask,
    _createTask,
    _updateTask,
    _deleteTask
} = require('./model_fs.js');

// var lastId = 0;

function getAllTasks (req, res) {
    try {
        let result = _getAllTasks();
        // console.log('controller - ', result);
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({message:'something went wring!!!', error: err});
    }
};

const getTask = (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        let result = _getTask(id)
        res.status(200).json(result)
    } catch(err) {
        res.status(404).json({message:'something went wring!!!', error: err});
    }
};

const createTask = (req, res) => {
    const {text} = req.body;
    // let id = lastId + 1;
    try {
        let result = _createTask(text, false)
        // lastId += 1;
        res.status(200).json(result)
    } catch(err) {
        res.status(404).json({message:'something went wring!!!', error: err});
    }
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const {text, done} = req.body;
    try {
        let result =  _updateTask (id, text, done)
        res.status(200).json(result)
    } catch(err) {
        res.status(404).json({message:'something went wring!!!', error: err});
    }
};


const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        let result =  _deleteTask(id)
        res.status(200).json(result)
    } catch(err) {
        res.status(404).json({message:'something went wring!!!', error: err});
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};

