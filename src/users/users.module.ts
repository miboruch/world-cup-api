import { Global, Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';

import { UsersService } from './users.service';
import { UserModel } from 'models';

@Global()
@Module({
  imports: [ObjectionModule.forFeature([UserModel])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
