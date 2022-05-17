import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { StudentRegisterDto } from './dto/studentLogin.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class StudentRepository {
  constructor(private httpService: HttpService) {}

  async authLogin(studentLogin: StudentRegisterDto): Promise<any> {
    const url = 'http://localhost:3001/auth/login';
    const data: AxiosResponse = await lastValueFrom(
      this.httpService.post(url, studentLogin).pipe(map((resp) => resp.data)),
    );
    return data;
  }

  async authRegister(studentRegister: StudentRegisterDto): Promise<any> {
    const url = 'http://localhost:3001/auth/register';
    const newUser: AxiosResponse<StudentRegisterDto> = await lastValueFrom(
      this.httpService
        .post(url, studentRegister)
        .pipe(map((resp) => resp.data)),
    );
    return newUser;
  }
}
