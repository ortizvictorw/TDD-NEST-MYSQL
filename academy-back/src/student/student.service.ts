import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student-repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}
  login(studentLogin) {
    return this.studentRepository.authLogin(studentLogin);
  }
}
