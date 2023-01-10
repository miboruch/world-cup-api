import { applyDecorators, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../jwt/jwt.guard';

export const BearerAuth = () => {
  return applyDecorators(UseGuards(JwtGuard));
};
