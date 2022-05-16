import { Test, TestingModule } from '@nestjs/testing';
import { studentRegisterMock } from '../common/mocks';
import { AuthRepositoryService } from './auth-repository.service';

jest.mock('./auth-repository.service.ts');

describe('AuthRepositoryService', () => {
  let repository: AuthRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthRepositoryService, AuthRepositoryService],
    }).compile();

    repository = module.get<AuthRepositoryService>(AuthRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('repository.register - should be defined witch studentDto', () => {
    repository.register(studentRegisterMock);
    expect(repository.register).toBeCalledWith(studentRegisterMock);
  });
});
