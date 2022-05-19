import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepositoryService } from './auth-repository.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Student } from './entities/student.entity';
import { LocalStrartegy } from './strategies/local.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepositoryService, LocalStrartegy],
})
export class AuthModule {}
