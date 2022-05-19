import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock, studentRegisterMock } from '../../common/mocks';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

jest.mock('../auth.service');

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
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

  it('service.register - should be defined witch studentDto', () => {
    service.register(studentLoginMock);
    expect(service.register).toBeCalledWith(studentLoginMock);
  });

  it('should return new User', async () => {
    jest.spyOn(service, 'register').mockImplementation(async (studentLoginMock) => {
      const { password, ...newUser } = studentLoginMock;
      const newUserMock = { ...newUser, id: 1 };
      return newUserMock;
    });
    expect(await service.register(studentLoginMock)).toEqual(studentRegisterMock);
  });
});
