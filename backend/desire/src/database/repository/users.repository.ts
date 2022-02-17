import { EntityRepository, Repository } from 'typeorm';
import { Users } from '../entity/users.entity';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
