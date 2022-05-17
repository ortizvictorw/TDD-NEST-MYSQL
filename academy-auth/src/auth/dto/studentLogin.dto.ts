import { IsEmail, IsNumber, IsString } from 'class-validator';

export class StudentLoginDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class StudentLCreateDto {
  @IsNumber()
  id: number;
  @IsString()
  userName: string;
  @IsEmail()
  email: string;
}
