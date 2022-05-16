import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock } from '../common/mocks';
import { AuthRepositoryService } from './auth-repository.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

jest.mock('./auth.service');

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  let repository: AuthRepositoryService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, AuthRepositoryService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
    repository = module.get<AuthRepositoryService>(AuthRepositoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('POST - AuthController - should be defined ', () => {
    expect(controller.login).toBeDefined();
  });

  it('service.login - should be defined witch studentDto', () => {
    service.login(studentLoginMock);
    expect(service.login).toBeCalledWith(studentLoginMock);
  });

  it('POST - AuthController - controller.register - should be defined ', () => {
    expect(controller.register).toBeDefined();
  });

  it('repository.register - should be defined witch studentDto', () => {
    repository.register(studentLoginMock);
    expect(repository.register).toBeCalledWith(studentLoginMock);
  });
});
