import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentLCreateDto, StudentLoginDto } from './dto/studentLogin.dto';
import { Student } from './entities/student.entity';
import { hash, compare } from 'bcryptjs';

@Injectable()
export class AuthRepositoryService {
  constructor(
    @InjectRepository(Student)
    private readonly authRepo: Repository<Student>,
  ) {}
  login(studentLogin: StudentLoginDto): StudentLoginDto {
    return studentLogin;
  }

  private async registerHash(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async userValidate(email: string, password: string): Promise<StudentLCreateDto> {
    const user = await this.authRepo.findOne({ email });
    console.debug(user);

    const isMatch = await compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(studentRegister: StudentLoginDto): Promise<StudentLCreateDto> {
    const { password, username: username, email } = studentRegister;
    const hasPasword = await this.registerHash(password);
    const newStudent = this.authRepo.create({
      password: hasPasword,
      username,
      email,
    });
    const saveNewUser = await this.authRepo.save(newStudent);
    const saveUser: StudentLCreateDto = {
      id: saveNewUser.id,
      email: saveNewUser.email,
      username: saveNewUser.username,
    };
    return saveUser;
  }
}
