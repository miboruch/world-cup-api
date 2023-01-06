import { applyDecorators, UseGuards } from '@nestjs/common';

export const Auth = () => {
  return applyDecorators(UseGuards());
};
