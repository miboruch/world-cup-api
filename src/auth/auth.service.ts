import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersService } from 'users/users.service';
import { CreateUserDto } from 'users/dtos';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.createUser(createUserDto);
      console.log(user);
      return user;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
