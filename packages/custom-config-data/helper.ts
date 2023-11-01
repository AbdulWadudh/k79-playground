import { ECHO_SECRETS, VERTEX_SECRETS } from '.';

export const processEnvKeys = (initFor = '', ENVS_KEYS: TObjString) => {
  // const removePrfix = (key: string) => (key.startsWith('VITE_') ? key.replace('VITE_', '') : key);

  if (initFor === 'ECHO') {
    Object.entries(ENVS_KEYS).forEach(([key, value]) => {
      ECHO_SECRETS[key] = (import.meta as CustomImportMeta).env[key] ?? value;
    });
  }

  if (initFor === 'VERTEX') {
    Object.entries(ENVS_KEYS).forEach(([key, value]) => {
      VERTEX_SECRETS[key] = process?.env[key] ?? value;
    });
  }

  return {
    ECHO_SECRETS,
    VERTEX_SECRETS,
  };
};
