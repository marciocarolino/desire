import { Body, Controller, Get, Post } from '@nestjs/common';
import { DesireService } from './desire.service';
import { DesireDto } from './dto/desire.dto';

@Controller('desire')
export class DesireController {
  constructor(private readonly desireService: DesireService) {}

  @Get()
  desireAll(): Promise<any> {
    return this.desireService.desireAll();
  }

  @Post()
  desireSave(@Body() desireDto: DesireDto): Promise<DesireDto> {
    return this.desireService.desireSave(desireDto);
  }
}
