import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysql: {
      dbName: process.env.MYSQL_DATABASE,
      port: parseInt(process.env.MYSQL_DATABASE_PORT, 10),
      password: process.env.MYSQL_PASSWORD,
      user: process.env.MYSQL_USER,
      host: process.env.DATABASE_HOST,
    },
  };
});
