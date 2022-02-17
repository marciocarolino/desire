import { EntityRepository, Repository } from 'typeorm';
import { Desire } from '../entity/desire.entity';

@EntityRepository(Desire)
export class DesireRepository extends Repository<Desire> {}
