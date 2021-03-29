export const enum Environment {
  Development = 'development',
  Production = 'production',
}

export const enum EnvironmentVariables {
  DATABASE_HOST = 'DATABASE_HOST',
  DATABASE_PORT = 'DATABASE_PORT',
  DATABASE_USER = 'DATABASE_USER',
  DATABASE_PASSWORD = 'DATABASE_PASSWORD',
  DATABASE_NAME = 'DATABASE_NAME',
  DATABASE_URL = 'DATABASE_URL',
}

export const envFilePath =
  process.env.NODE_ENV === Environment.Production
    ? `.${Environment.Production}.env`
    : `.${Environment.Development}.env`;
