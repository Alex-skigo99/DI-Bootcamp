const knex = require("knex");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

module.exports = {
  db: knex({
    client: "pg",
    connection: {
      host: PGHOST,
      port: PGPORT,
      user: PGUSER,
      database: PGDATABASE,
      password: PGPASSWORD,
      // ssl: { rejectUnauthorized: false },
    },
  }),
};


/**
 create table authusers (
  id serial not null primary key,
  email varchar(255) not null unique,
  password varchar(500) not null ,
  token varchar(500) 
)
 */