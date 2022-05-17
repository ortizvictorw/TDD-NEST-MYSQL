import { Module } from '@nestjs/common';
import config from './config';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    StudentModule,
  ],
})
export class AppModule {}
