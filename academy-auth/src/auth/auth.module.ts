import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepositoryService } from './auth-repository.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Student } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepositoryService],
})
export class AuthModule {}
