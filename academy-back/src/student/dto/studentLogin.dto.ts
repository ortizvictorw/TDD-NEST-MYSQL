import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class StudentRegisterDto {
  @IsString()
  @ApiProperty()
  userName: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @ApiProperty()
  password: string;
}
