const {db} = require('../config/db.js')
const table = 'users';
const table_pass = 'hashpwd';

const _getAllUsers = () => {
    return db(table).select('id', 'email', 'username', 'first_name', 'last_name').orderBy("id");
};

const _getOneUser = (id) => {
    return db(table)
        .select('id', 'email', 'username', 'first_name', 'last_name')
        .where({id: id})
};

const _insertUser = async (email, username, first_name, last_name, password) => {
    const [id] = await db(table).insert({
        username,
        email,
        first_name,
        last_name
      }).returning('id');
      let user_id = id.id
      console.log(user_id);
    return await db(table_pass)
        .insert({user_id, password}, ['user_id'])
};

const _updateUser = (id, email, username, first_name, last_name) => {
    return db(table)
        .where({id: id})
        .update({email, username, first_name, last_name}, ['id', 'email', 'username', 'first_name', 'last_name'])
};

const _deleteUser = (id) => {
    return db(table)
        .where({id: id})
        .delete()
};

const _loginUser = (user) => {
    return db(table)
        .join(table_pass, table + '.id', '=', table_pass + '.user_id')
        .select('email', 'username', 'first_name', 'last_name', table_pass + '.password')
        .where({username: user})
};

module.exports = {
    _getAllUsers,
    _getOneUser,
    _insertUser,
    _updateUser,
    _deleteUser,
    _loginUser
};