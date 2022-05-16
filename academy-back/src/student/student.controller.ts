import { Body, Controller, Post } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/login')
  async login(@Body() studentLogin: StudentLoginDto): Promise<any> {
    return await this.studentService.login(studentLogin);
  }

  @Post('/register')
  async register(@Body() studentRegister: StudentLoginDto): Promise<any> {
    return await this.studentService.register(studentRegister);
  }
}
