import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { enviroments } from './enviroment';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        MYSQL_USER: Joi.string().required(),
        MYSQL_DATABASE_HOST: Joi.string().required(),
        MYSQL_DATABASE: Joi.string().required(),
        MYSQL_PASSWORD: Joi.any().required(),
        MYSQL_DATABASE_PORT: Joi.number().required(),
      }),
    }),

    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule {}
