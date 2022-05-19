import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock, studentLoginResponseMock } from '../../common/mocks';
import { AuthRepositoryService } from '../auth-repository.service';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { StudentLoginDto } from '../dto/studentLogin.dto';

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

  it('repository.login - should be return user', () => {
    jest
      .spyOn(repository, 'login')
      .mockImplementation((studentLoginMock): StudentLoginDto => {
        return studentLoginMock;
      });
    expect(repository.login(studentLoginMock)).toEqual(
      studentLoginResponseMock,
    );
  });
});
