import { Module } from '@nestjs/common';
import { AuthRepositoryService } from './auth-repository.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepositoryService]
})
export class AuthModule {}
