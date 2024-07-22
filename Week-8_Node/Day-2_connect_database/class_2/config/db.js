const knex = require('knex');
require('dotenv').config();

// console.log(process.env);

const {PGHOST, PGPORT, PGUSER, PGDB, PGPASSWORD} = process.env;

const db = knex ({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDB,
        password: PGPASSWORD
        // ssl: {rejectUnauthorized: false},  
    }
});

module.exports = {
    db
};