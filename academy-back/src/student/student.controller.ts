import { Controller, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor() {}

  @Post('/login')
  login() {}
}
