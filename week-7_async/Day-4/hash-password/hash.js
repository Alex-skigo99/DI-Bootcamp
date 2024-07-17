const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashMyPassword(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
};

module.exports = {
    hashMyPassword
}