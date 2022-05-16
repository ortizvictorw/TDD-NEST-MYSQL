import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { StudentLoginDto } from './dto/studentLogin.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class StudentRepository {
  constructor(private httpService: HttpService) {}

  async authLogin(studentLogin: StudentLoginDto): Promise<any> {
    const url = 'http://localhost:3001/auth/login';
    const data: AxiosResponse = await lastValueFrom(
      this.httpService.post(url, studentLogin).pipe(map((resp) => resp.data)),
    );
    return data;
  }

  async authRegister(studentRegister: StudentLoginDto): Promise<any> {
    const url = 'http://localhost:3001/auth/register';
    const data: AxiosResponse = await lastValueFrom(
      this.httpService
        .post(url, studentRegister)
        .pipe(map((resp) => resp.data)),
    );
    return data;
  }
}
