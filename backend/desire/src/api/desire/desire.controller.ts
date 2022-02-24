import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DesireService } from './desire.service';
import { DesireDto, DesireUpdateDto } from './dto/desire.dto';

@Controller('desire')
export class DesireController {
  constructor(private readonly desireService: DesireService) {}

  @Get()
  desireAll(): Promise<any> {
    return this.desireService.desireAll();
  }

  @Get(':id')
  desireFindById(@Param('id') id: number): Promise<DesireDto> {
    return this.desireService.desireFindById(id);
  }

  @Post()
  desireSave(@Body() desireDto: DesireDto): Promise<DesireDto> {
    return this.desireService.desireSave(desireDto);
  }

  @Put(':id')
  desireUpdate(
    @Param('id') id: number,
    @Body() desireDto: DesireUpdateDto,
  ): Promise<DesireUpdateDto> {
    return this.desireService.desireUpdate(id, desireDto);
  }

  @Delete(':id')
  desireDelete(@Param('id') id: number) {
    return this.desireService.desireDelete(id);
  }
}
