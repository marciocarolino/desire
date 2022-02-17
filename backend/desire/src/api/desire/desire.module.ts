import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesireRepository } from 'src/database/repository/desire.repository';
import { DesireController } from './desire.controller';
import { DesireService } from './desire.service';

@Module({
  imports: [TypeOrmModule.forFeature([DesireRepository])],
  controllers: [DesireController],
  providers: [DesireService],
  exports: [DesireService],
})
export class DesireModule {}
