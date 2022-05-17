import { Injectable } from '@nestjs/common';
import { StudentRegisterDto } from './dto/studentLogin.dto';
import { StudentRepository } from './student-repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}
  async login(studentLogin: StudentRegisterDto): Promise<any> {
    return await this.studentRepository.authLogin(studentLogin);
  }

  async register(studentRegister: StudentRegisterDto): Promise<any> {
    return await this.studentRepository.authRegister(studentRegister);
  }
}
