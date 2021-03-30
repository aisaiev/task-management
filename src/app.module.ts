import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    DatabaseModule,
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
