import { Test, TestingModule } from '@nestjs/testing';
import { StudentRepository } from './student-repository';

describe('StudentRepository', () => {
  let repository: StudentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentRepository],
    }).compile();

    repository = module.get<StudentRepository>(StudentRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
