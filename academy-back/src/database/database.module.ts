import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: ({ mysql }: ConfigType<typeof config>): any => {
        const { user, host, dbName, password, port } = mysql;
        return {
          type: 'mysql',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}
