import { EntityRepository, Repository } from "typeorm";
import { DesireEntity } from '../entity/desire.entity';

@EntityRepository(DesireEntity)
export class DesireRepository extends Repository<DesireEntity>{ }