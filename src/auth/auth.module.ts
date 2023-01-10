import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigEnum } from 'config';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return configService.get(configService.get(ConfigEnum.jwt));
      },
      inject: [ConfigService],
    }),
  ],
})
export class AuthModule {}
