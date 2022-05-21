// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DBNAME || "newzy",
      user: process.env.DBUSER || "newzy",
      password: process.env.DBPASSWORD || "newzy",
      host: process.env.DBHOST || "127.0.0.1",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
