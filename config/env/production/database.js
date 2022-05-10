const parse = require('pg-connection-string').parse;
const config = parse('postgres://lshjxbjeilzmgg:44865908c31e788f1ddf34cf63cb8ed3ebebe89d0b7b2ebeece8b9a4e889ad6a@ec2-54-158-247-210.compute-1.amazonaws.com:5432/d8a5e7c2utc49j');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});