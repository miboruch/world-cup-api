import jwtConfig from 'config/jwt.config';
import sqlConfig from 'config/sql.config';

export * from './config.enum';
export { default as jwtConfig } from './jwt.config';
export { default as sqlConfig } from './sql.config';

export const configs = [jwtConfig, sqlConfig];
