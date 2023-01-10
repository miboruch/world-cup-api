import { registerAs } from '@nestjs/config';

import { ConfigEnum } from 'config/config.enum';

export default registerAs(ConfigEnum.jwt, () => ({
  secret: process.env.AUTH_SECRET || 'jwt-auth-secret',
  signOptions: {
    expiresIn: +(process.env.AUTH_TOKEN_EXP || 300),
  },
}));
