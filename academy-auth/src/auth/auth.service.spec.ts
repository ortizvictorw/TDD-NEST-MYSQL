import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock } from '../common/mocks';
import { AuthRepositoryService } from './auth-repository.service';
import { AuthService } from './auth.service';
jest.mock('./auth-repository.service.ts');

describe('AuthService', () => {
  let service: AuthService;
  let repository: AuthRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, AuthRepositoryService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    repository = module.get<AuthRepositoryService>(AuthRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('repository.login - should be defined witch studentDto', () => {
    repository.login(studentLoginMock);
    expect(repository.login).toBeCalledWith(studentLoginMock);
  });

  it('repository.register - should be defined witch studentDto', () => {
    repository.register(studentLoginMock);
    expect(repository.register).toBeCalledWith(studentLoginMock);
  });
});
