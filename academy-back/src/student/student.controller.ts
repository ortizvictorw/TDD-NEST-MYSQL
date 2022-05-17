import { Body, Controller, Post } from '@nestjs/common';
import { StudentRegisterDto } from './dto/studentLogin.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/login')
  async login(@Body() studentLogin: StudentRegisterDto): Promise<any> {
    return await this.studentService.login(studentLogin);
  }

  @Post('/register')
  async register(@Body() studentRegister: StudentRegisterDto): Promise<any> {
    return await this.studentService.register(studentRegister);
  }
}
