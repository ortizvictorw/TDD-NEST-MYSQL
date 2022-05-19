import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthRepositoryService } from '../auth-repository.service';
import { StudentLCreateDto } from '../dto/studentLogin.dto';

@Injectable()
export class LocalStrartegy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authRepositoryService: AuthRepositoryService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }
  async validate(username: string, password: string): Promise<StudentLCreateDto> {
    console.debug('user');
    const user = await this.authRepositoryService.userValidate(username, password);
    if (!user) {
      throw new UnauthorizedException('Not authorized');
    }
    return user;
  }
}
