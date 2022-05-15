import { Injectable } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';
import { StudentRepository } from './student-repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}
  login(studentLogin: StudentLoginDto) {
    return this.studentRepository.authLogin(studentLogin);
  }
}
