import { IsString } from 'class-validator';

export class StudentLoginDto {
  @IsString()
  userName: string;
  @IsString()
  password: string;
}
