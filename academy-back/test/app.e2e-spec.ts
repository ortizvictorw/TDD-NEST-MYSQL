import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { StudentModule } from '../src/student/student.module';
import { StudentRepository } from '../src/student/student-repository';
import { studentLoginMock } from '../src/common/mocks';
jest.mock('../src/student/student-repository');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule, StudentModule],
      providers: [StudentRepository],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/student/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/student/login')
      .expect(studentLoginMock);
  });
});
