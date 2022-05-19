import { Post, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { StudentLCreateDto, StudentLoginDto } from './dto/studentLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auhtService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Body() studentLogin: StudentLoginDto): StudentLoginDto {
    return this.auhtService.login(studentLogin);
  }

  @Post('/register')
  async register(@Body() studentRegister: StudentLoginDto): Promise<StudentLCreateDto | any> {
    return await this.auhtService.register(studentRegister);
  }
}
