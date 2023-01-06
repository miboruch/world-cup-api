export default {
  pg: {
    client: 'pg',
    connection: {
      host: process.env.SQL_HOST || 'localhost',
      port: +(process.env.SQL_PORT || 5432),
      user: process.env.SQL_USERNAME || 'postgres',
      password: process.env.SQL_PASSWORD || 'postgres',
      database: process.env.SQL_DBNAME || 'world-cup',
      ssl: false,
    },
    migrations: {
      directory: './migrations',
      tableName: 'migrations',
    },
  },
};
