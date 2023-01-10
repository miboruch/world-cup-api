import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersService } from 'users/users.service';
import { RegisterDto, LoginDto } from 'auth/dtos';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  validateUser(email: string, password: string) {
    return this.usersService.validateUser(email, password);
  }

  async login(loginDto: LoginDto) {
    console.log(loginDto);

    return `Tried to log in with ${loginDto.email} ${loginDto.password}`;
  }

  async register(registerDto: RegisterDto) {
    try {
      const user = await this.usersService.createUser(registerDto);
      console.log(user);
      return user;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
