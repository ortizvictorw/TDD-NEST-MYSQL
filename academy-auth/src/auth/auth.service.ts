import { Injectable } from '@nestjs/common';
import { AuthRepositoryService } from './auth-repository.service';
import { StudentLoginDto } from './dto/studentLogin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepositoryService: AuthRepositoryService) {}
  login(studentLogin: StudentLoginDto) {
    return this.authRepositoryService.login(studentLogin);
  }
  async register(studentLogin: StudentLoginDto) {
    return await this.authRepositoryService.register(studentLogin);
  }
}
