import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';

@Controller('auth')
export class AuthController {
  @Post('/login')
  login(studentLogin: StudentLoginDto) {}

  @Post('/register')
  register(studentLogin: StudentLoginDto) {}
}
