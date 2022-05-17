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
    dbConfig:{
      synchronize: process.env.SYNCHONIZE_DATABASE,
      autoLoadEntities: process.env.AUTO_LOAD_ENTITIES_DATABASE,
    }
  };
});
