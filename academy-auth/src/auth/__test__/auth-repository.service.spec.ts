import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock, studentRegisterMock } from '../../common/mocks';
import { AuthRepositoryService } from '../auth-repository.service';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

jest.mock('../auth-repository.service.ts');

describe('AuthRepositoryService', () => {
  let repository: AuthRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthRepositoryService, AuthService],
    }).compile();
    repository = module.get<AuthRepositoryService>(AuthRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('repository.register - should be defined witch studentDto', () => {
    repository.register(studentLoginMock);
    expect(repository.register).toBeCalledWith(studentLoginMock);
  });
});
