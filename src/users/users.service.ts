import { Inject, Injectable, BadRequestException } from '@nestjs/common';

import { UserModel } from 'models';
import { CreateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(@Inject(UserModel) private userModel: typeof UserModel) {}

  async validateUser(email: string, password: string) {
    const user = await this.userModel.query().findOne({ email });

    if (!user) throw new BadRequestException('Wrong username/password'); // security purposes

    const doesPasswordMatch = await user.comparePassword(password);
    if (!doesPasswordMatch) throw new BadRequestException('Wrong username/password');

    return { userId: user.id };
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userModel.query().insert(createUserDto);
  }
}
