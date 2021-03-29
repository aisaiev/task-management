import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app-config.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, TasksModule, AuthModule],
})
export class AppModule {}
