import { Injectable } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';

@Injectable()
export class AuthService {
  login(studentLogin: StudentLoginDto) {}
  register(studentLogin: StudentLoginDto) {}
}
