import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DesireRepository } from 'src/database/repository/desire.repository';
import { DesireDeleteDto, DesireDto, DesireUpdateDto } from './dto/desire.dto';

@Injectable()
export class DesireService {
  constructor(private readonly desireRepository: DesireRepository) {}

  async desireAll(): Promise<any> {
    return this.desireRepository.find({
      relations: ['users'],
      where: { users: { is_active: true }, is_active: true },
    });
  }

  async desireFindById(id: number): Promise<DesireDto> {
    return this.desireRepository.findOne({
      relations: ['users'],
      where: { users: { is_active: true }, id, is_active: true },
    });
  }

  async desireSave(desireDto: DesireDto): Promise<any> {
    return await this.desireRepository.save({
      ...desireDto,
      is_active: true,
      create_at: new Date(),
      update_at: new Date(),
    });
  }

  async desireUpdate(
    id: number,
    desireDto: DesireUpdateDto,
  ): Promise<DesireUpdateDto> {
    let updateDesire = await this.desireRepository.findOne({
      where: { id, is_active: true },
    });

    if (updateDesire) {
      updateDesire.desire = desireDto.desire;
      updateDesire.description = desireDto.description;
      updateDesire.update_at = new Date();
      updateDesire = await this.desireRepository.save(updateDesire);
      return updateDesire;
    } else {
      throw new HttpException('ID not exists', HttpStatus.METHOD_NOT_ALLOWED);
    }
  }

  async desireDelete(id: number): Promise<DesireDeleteDto> {
    const desireDelete = await this.desireRepository.findOne({
      where: { id, is_active: true },
    });

    desireDelete.is_active = false;
    desireDelete.update_at = new Date();
    return this.desireRepository.save(desireDelete);
  }
}
