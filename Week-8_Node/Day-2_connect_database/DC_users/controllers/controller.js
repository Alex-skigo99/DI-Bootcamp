const bcrypt = require('bcrypt');

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
    _insertUser(email, username, first_name, last_name, password)
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
    _updateUser(id, email, username, first_name, last_name, password)
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

async function loginUser (req, res) {
    const {username, email, password} = req.body;
    try {
        const result = await _loginUser(username, email);
        if (!result) {
            res.status(404).json({message:'Username not found'});
        };
        console.log(result.password, password);
        const passMatch = await bcrypt.compare(password+'', result.password)
        if (!passMatch) {
            res.status(401).json({massage: 'Password failed'})
        };
        res.status(200).json({
            message: 'Authorized...', 
            user_id: result.id,
            username: result.username
        });
    } catch (e) {
        res.status(404).json({message:'something went wring!!!'})
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
    loginUser
};

// var pass = 'strong#pass'
// const h = bcrypt.hashSync(pass, saltRounds);
// console.log(h.length, ' - ', h);
// pass += '1';
// if (!bcrypt.compareSync(pass, h)) console.log('No')
//     else console.log('Yes!');
