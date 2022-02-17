import { Injectable } from '@nestjs/common';
import { DesireRepository } from 'src/database/repository/desire.repository';

@Injectable()
export class DesireService {
  constructor(private readonly desireRepository: DesireRepository) {}

  async desireAll(): Promise<any> {
    return this.desireRepository.find({
      relations: ['users'],
    });
  }
}
