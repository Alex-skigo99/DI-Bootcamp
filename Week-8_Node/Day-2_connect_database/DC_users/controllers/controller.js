const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
    _getAllUsers,
    _getOneUser,
    _insertUser,
    _updateUser,
    _deleteUser,
    _loginUser
} = require('../models/model.js');

const getAllUsers = (req, res) => {
    _getAllUsers()
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const getOneUser = (req, res) => {
    const { id } = req.params;
    _getOneUser(id)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const insertUser = (req, res) => {
    const {email, username, first_name, last_name, password} = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    console.log(hash);
    _insertUser(email, username, first_name, last_name, hash)
    .then(result => {
        res.json(result);
    })
    .catch(e => {
        res.status(404).json({message:'something went wring!!!'});
    })
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const {email, username, first_name, last_name, password} = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    _updateUser(id, email, username, first_name, last_name, hash)
    .then(result => {
        res.json(result);
    })
    .catch(e => {
        res.status(404).json({message:'something went wring!!!'});
    })
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    _deleteUser(id)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const loginUser = (req, res) => {
    const {username, password} = req.body;
    _loginUser(username)
    .then(result => {
        if ([...result] == '') {
            res.status(404).json({message:'Username not found'});
        };
        console.log(result[0].password, password);
        if (!bcrypt.compareSync(password, result[0].password)) {
            res.status(401);
        };
        res.status(200).json({status: 'Authorized...', user_id: result[0].id});
        // getAllBooks(req, res);
    })
    .catch(e => {
        res.status(404).json({message:'something went wring!!!'});
    })
};


module.exports = {
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
    loginUser
};