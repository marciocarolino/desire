import { Controller, Get } from '@nestjs/common';
import { DesireService } from './desire.service';

@Controller('desire')
export class DesireController {
  constructor(private readonly desireService: DesireService) {}

  @Get()
  desireAll(): Promise<any> {
    return this.desireService.desireAll();
  }
}
