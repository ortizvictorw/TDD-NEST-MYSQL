import { Injectable } from '@nestjs/common';
import { StudentLoginDto } from './dto/studentLogin.dto';
import { StudentRepository } from './student-repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}
  async login(studentLogin: StudentLoginDto): Promise<any> {
    return await this.studentRepository.authLogin(studentLogin);
  }

  async register(studentRegister: StudentLoginDto): Promise<any> {
    return await this.studentRepository.authLogin(studentRegister);
  }
}
