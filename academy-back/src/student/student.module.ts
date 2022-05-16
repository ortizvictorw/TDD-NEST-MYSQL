import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentRepository } from './student-repository';

import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), HttpModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
