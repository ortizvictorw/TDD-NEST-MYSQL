import { Module } from '@nestjs/common';

import { StudentModule } from './student/student.module';
import { StudentRepository } from './student/student-repository';

@Module({
  imports: [StudentModule],
  providers: [StudentRepository],
})
export class AppModule {}
