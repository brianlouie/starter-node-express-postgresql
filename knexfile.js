// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

const config = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};

module.exports = config


console.log(config)