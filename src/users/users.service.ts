import { Injectable } from '@nestjs/common';
import { UserModel } from 'models';

import { CreateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private readonly userModel: typeof UserModel) {}

  createUser(createUserDto: CreateUserDto) {
    this.userModel.query().insert(createUserDto);
  }
}
