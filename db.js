const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students", //this is the name of the database you created
  password: "postgres",
  port: 5432, //this is the default port from postgres
});

module.exports = pool;
