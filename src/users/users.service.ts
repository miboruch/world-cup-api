import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from 'models';

import { CreateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(@Inject(UserModel) private userModel: typeof UserModel) {}

  createUser(createUserDto: CreateUserDto) {
    return this.userModel.query().insert(createUserDto);
  }
}
