import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthRepositoryService } from './auth-repository.service';
import { StudentLCreateDto, StudentLoginDto } from './dto/studentLogin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepositoryService: AuthRepositoryService) {}
  login(studentLogin: StudentLoginDto) {
    return this.authRepositoryService.login(studentLogin);
  }
  async register(
    studentLogin: StudentLoginDto,
  ): Promise<StudentLCreateDto | any> {
    try {
      return await this.authRepositoryService.register(studentLogin);
    } catch (error) {
      console.error(error);
      if (error.code === 'ER_DUP_ENTRY') {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['Email already exists'],
          error: 'Bad Request',
        };
      }
    }
  }
}
