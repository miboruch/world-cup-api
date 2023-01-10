import { Controller, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';

import { AuthService } from 'auth/auth.service';
import { LoginDto, RegisterDto } from './dtos';
import { LocalGuard } from 'auth/local/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalGuard)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
