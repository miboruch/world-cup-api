import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from 'objection';

import { ConfigEnum } from 'config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { configs } from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: configs }),
    ObjectionModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          name: 'postgres',
          config: {
            ...configService.get(ConfigEnum.sql),
            ...knexSnakeCaseMappers(),
          },
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
