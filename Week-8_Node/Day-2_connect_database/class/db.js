const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

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

async function getVersion() {
    try {
        const result = await db.raw('select version()');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

db('actor')
    .select('actor_id', 'first_name')
    .where('actor_id', 4)
    .then((rows) => {
        console.log(rows);
    })
    .catch((err) => {
        console.log(err);
    });

db('actor')
    .where({actor_id: 4})
    .update({first_name: 'Larisa'}, ['actor_id', 'first_name'])
    .then((result) => {
        console.log(result);
    })

db('actor')
    .select('actor_id', 'first_name')
    .where('actor_id', 4)
    .then((rows) => {
        console.log(rows);
    })
    .catch((err) => {
        console.log(err);
    });

// db('actor')
//     .insert(
//         [
//             {}
//         ]
//     )
//     .returning('')
//     .then(result => console.log(result));

// db('actor')
//     .where()
//     .delete()
//     .returning()
//     .then(result => console.log(result));
   
db.raw('select * from actor where actor_id = ?', 6).then((result) => {
    console.log(result.rows);
});
