import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [DataBaseModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
