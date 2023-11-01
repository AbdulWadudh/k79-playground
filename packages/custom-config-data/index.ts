import { processEnvKeys } from './helper';

export const ENVS_KEYS = {
  NODE_ENV: 'development',
  DATABASE_URL: 'mysql://root:password@localhost:3306',
  VITE_ECHO_BASE_URL: 'http://localhost:3000',
  VITE_VERTEX_BASE_URL: 'http://localhost:4000',
} as TObjString;

export const processEnvs = (initFor = '') => processEnvKeys(initFor, ENVS_KEYS);

type TSecrets<T> = { [K in keyof T]: string };

export const ECHO_SECRETS = {} as TSecrets<typeof ENVS_KEYS>;
export const VERTEX_SECRETS = {} as TSecrets<typeof ENVS_KEYS>;
