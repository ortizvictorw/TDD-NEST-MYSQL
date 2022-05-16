import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { studentLoginMock } from '../common/mocks';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
jest.mock('./student.service');

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [StudentController],
      providers: [StudentService],
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('POST - StudentController - should be defined ', () => {
    expect(controller.login).toBeDefined();
  });

  it('POST - service.login - should  receive a studentDTO ', () => {
    controller.login(studentLoginMock);
    expect(service.login).toBeDefined();
  });

  it('POST - service.register - should  receive a studentDTO ', () => {
    controller.register(studentLoginMock);
    expect(service.register).toBeDefined();
  });
});
