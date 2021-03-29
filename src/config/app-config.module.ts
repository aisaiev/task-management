import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envFilePath } from './app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
    }),
  ],
})
export class AppConfigModule {}
