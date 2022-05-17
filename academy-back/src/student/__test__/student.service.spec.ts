import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock } from '../../common/mocks';
import { StudentRepository } from '../student-repository';
import { StudentService } from '../student.service';

jest.mock('../student-repository');

describe('StudentService', () => {
  let service: StudentService;
  let repository: StudentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService, StudentRepository],
    }).compile();

    service = module.get<StudentService>(StudentService);
    repository = module.get<StudentRepository>(StudentRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('StundtService - repository.authLogin - should be defined ', () => {
    expect(repository.authLogin).toBeDefined();
  });

  it('repository - repository.authLogin - should  receive a studentDTO ', () => {
    repository.authLogin(studentLoginMock);
    expect(repository.authLogin).toBeCalledWith(studentLoginMock);
  });
});
