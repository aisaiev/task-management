import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Environment, EnvironmentVariables } from 'src/config/app.config';

@Injectable()
export class DatabaseConfigeService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    if (process.env.NODE_ENV === Environment.Production) {
      return {
        type: 'postgres',
        url: this.configService.get(EnvironmentVariables.DATABASE_URL),
      };
    } else {
      return {
        type: 'postgres',
        host: this.configService.get(EnvironmentVariables.DATABASE_HOST),
        port: this.configService.get(EnvironmentVariables.DATABASE_PORT),
        username: this.configService.get(EnvironmentVariables.DATABASE_USER),
        password: this.configService.get(
          EnvironmentVariables.DATABASE_PASSWORD,
        ),
        database: this.configService.get(EnvironmentVariables.DATABASE_NAME),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      };
    }
  }
}
