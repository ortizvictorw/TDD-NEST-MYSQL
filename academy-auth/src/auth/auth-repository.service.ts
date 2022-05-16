import { Injectable } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';

@Injectable()
export class AuthRepositoryService {
  login(studentLogin: StudentLoginDto) {}
  register(studentLogin: StudentLoginDto) {}
}
