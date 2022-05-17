import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentLCreateDto, StudentLoginDto } from './dto/studentLogin.dto';
import { Student } from './entities/student.entity';
import { hash } from 'bcryptjs';

@Injectable()
export class AuthRepositoryService {
  constructor(
    @InjectRepository(Student)
    private readonly authRepo: Repository<Student>,
  ) {}
  login(studentLogin: StudentLoginDto) {}

  private async registerHash(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async register(studentRegister: StudentLoginDto): Promise<StudentLCreateDto> {
    const { password, userName, email } = studentRegister;
    const hasPasword = await this.registerHash(password);
    const newStudent = this.authRepo.create({
      password: hasPasword,
      userName,
      email,
    });
    const saveNewUser = await this.authRepo.save(newStudent);
    const saveUser: StudentLCreateDto = {
      id: saveNewUser.id,
      email: saveNewUser.email,
      userName: saveNewUser.userName,
    };
    return saveUser;
  }
}
