import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from 'objection';

import { ConfigEnum } from 'config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).config.{ts,js}'), {
    //   modifyConfigName: (name) => name.replace('.config', ''),
    // }),

    ConfigModule.forRoot({ isGlobal: true, load: [] }),
    ObjectionModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        console.log('OBJECTION MODULE');
        console.log(configService.get(ConfigEnum.sql));
        console.log(configService);
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
