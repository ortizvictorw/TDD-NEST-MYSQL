import { IsEmail, IsString } from 'class-validator';

export class StudentLoginDto {
  @IsString()
  userName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
