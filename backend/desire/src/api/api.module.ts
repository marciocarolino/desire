import { Module } from '@nestjs/common';
import { DesireModule } from './desire/desire.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, DesireModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiModule {}
