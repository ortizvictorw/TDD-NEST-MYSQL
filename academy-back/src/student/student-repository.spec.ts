import { Test, TestingModule } from '@nestjs/testing';
import { StudentRepository } from './student-repository';

describe('StudentRepository', () => {
  let provider: StudentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentRepository],
    }).compile();

    provider = module.get<StudentRepository>(StudentRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
