import { IsEmail, IsNumber, IsString } from 'class-validator';

export class StudentLoginDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class StudentLCreateDto {
  @IsNumber()
  id: number;
  @IsString()
  username: string;
  @IsEmail()
  email: string;
}
