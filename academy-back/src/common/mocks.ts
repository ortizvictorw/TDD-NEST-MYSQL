import { EmailDuplicateError } from 'src/student/dto/reponse.dto';

export const studentLoginMock = {
  username: 'Vcitor Ortiz',
  email: 'victor.com',
  password: '1234567',
};

export const studentRegisterMockError = {
  username: 'Vcitor Ortiz',
  email: 'victor.com',
  password: '1234567',
};

export const emailDuplicateErrorMock: EmailDuplicateError = {
  statusCode: 400,
  message: ['This email is already registered'],
  error: 'Bad Request',
};

export const emailInvalidErrorMock: EmailDuplicateError = {
  statusCode: 400,
  message: ['email must be an email'],
  error: 'Bad Request',
};
