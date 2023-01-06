import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from 'objection';

import { ConfigEnum } from 'config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';

@Module({
  imports: [
    ObjectionModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        name: 'postgres',
        config: {
          ...configService.get(ConfigEnum.sql),
          ...knexSnakeCaseMappers(),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
