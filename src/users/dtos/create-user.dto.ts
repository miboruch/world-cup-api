import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsString()
  surname!: string;

  @IsString()
  nickname!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}
