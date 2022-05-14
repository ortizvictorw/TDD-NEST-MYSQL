import { Controller, Post } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/login')
  login(studentLogin: StudentLoginDto) {
    return this.studentService.login(studentLogin);
  }
}
