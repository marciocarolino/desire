import { Injectable } from '@nestjs/common';
import { DesireRepository } from 'src/database/repository/desire.repository';
import { DesireDto } from './dto/desire.dto';

@Injectable()
export class DesireService {
  constructor(private readonly desireRepository: DesireRepository) {}

  async desireAll(): Promise<any> {
    return this.desireRepository.find({
      relations: ['users'],
    });
  }

  async desireSave(desireDto: DesireDto): Promise<any> {
    const desireSave = await this.desireRepository.save({
      ...desireDto,
      is_active: true,
      create_at: new Date(),
      update_at: new Date(),
    });

    return desireSave;
  }
}
