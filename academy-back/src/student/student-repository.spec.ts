import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { StudentRepository } from './student-repository';
import { StudentService } from './student.service';

describe('StudentRepository', () => {
  let repository: StudentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [StudentRepository, StudentService],
    }).compile();

    repository = module.get<StudentRepository>(StudentRepository);
  });

  it('UserRepository - should be defined ', () => {
    expect(repository.authLogin).toBeDefined();
  });

  it('UserRepository - should be defined ', () => {
    expect(repository.authLogin).toBeDefined();
  });

  it('UserRepository - authRegister - should be defined ', () => {
    expect(repository.authRegister).toBeDefined();
  });

});
