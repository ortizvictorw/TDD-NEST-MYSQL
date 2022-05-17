import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { enviroments } from './enviroment';
import config from './config';

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
    DatabaseModule,
    StudentModule,
  ],
})
export class AppModule {}
