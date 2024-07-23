const {db} = require('../config/db.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const table = 'users';

const _getAllUsers = () => {
    return db(table).select('id', 'email', 'username', 'first_name', 'last_name').orderBy("id");
};

const _getOneUser = (id) => {
    return db(table)
        .select('id', 'email', 'username', 'first_name', 'last_name')
        .where({id: id})
};

const _insertUser = async (email, username, first_name, last_name, password) => {
    const trx = await db.transaction();
    try {
        const [user] = await trx('users').insert({
            username,
            email,
            first_name,
            last_name
          }).returning('id', 'username', 'email');
        const hash = await bcrypt.hash(password+'', saltRounds);
        await trx('hashpwd').insert ({
            user_id: user.id,
            password: hash
        });
        await trx.commit();
        return user
    } catch (error) {
        await rollback();
        throw error
    }
};

const _updateUser = async (id, email, username, first_name, last_name, password) => {
    const trx = await db.transaction();
    try {
        const [user] = await trx('users')
        .where ({id: id})
        .update({
            username,
            email,
            first_name,
            last_name
          })
        .returning('id', 'username', 'email');
        const hash = await bcrypt.hash(password+'', saltRounds);
        await trx('hashpwd')
        .where ({user_id: id})
        .update ({password: hash});
        await trx.commit();
        return user
    } catch (error) {
        await rollback();
        throw error
    }
};

const _deleteUser = (id) => {
    return db(table)
        .where({id: id})
        .delete()
};

const _loginUser = async (username, email) => {
    try {
        const user = await db('users')
            .select('users.id', 'users.email', 'users.username', 'hashpwd.password')
            .join('hashpwd', {'users.id': 'hashpwd.user_id'})
            .where('users.username', username)
            .orWhere('users.email', email)
            .first();
            return user
    } catch (error) {
        throw error
    }
};

module.exports = {
    _getAllUsers,
    _getOneUser,
    _insertUser,
    _updateUser,
    _deleteUser,
    _loginUser
};