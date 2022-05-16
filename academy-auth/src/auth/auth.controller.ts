import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StudentLoginDto } from './dto/studentLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auhtService: AuthService) {}
  @Post('/login')
  login(studentLogin: StudentLoginDto) {
    return this.auhtService.login(studentLogin);
  }

  @Post('/register')
  register(studentRegister: StudentLoginDto) {
    return this.auhtService.register(studentRegister);
  }
}
