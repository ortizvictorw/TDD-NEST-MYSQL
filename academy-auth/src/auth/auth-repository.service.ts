import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentLoginDto } from './dto/studentLogin.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class AuthRepositoryService {
  constructor(
    @InjectRepository(Student)
    private readonly authRepo: Repository<Student>,
  ) {}
  login(studentLogin: StudentLoginDto) {}

  async register(studentRegister: StudentLoginDto): Promise<Student> {
    return this.authRepo.create(studentRegister);
  }
}
