import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { UsersRepository } from 'src/database/repository/users.repository';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async usersAll(): Promise<any> {
    return await this.usersRepository.find({
      order: { id: 'ASC' },
    });
  }

  async userSave(usersDto: UsersDto): Promise<UsersDto> {
    const email = usersDto.email;
    const verifyEmail = await this.usersRepository.findOne({ email });

    if (!verifyEmail) {
      const user = await this.usersRepository.save({
        name: usersDto.name,
        sex: usersDto.sex,
        email: usersDto.email,
        cell: usersDto.cell,
        city: usersDto.city,
        state: usersDto.state,
        password: usersDto.password,
        create_at: new Date(),
        update_at: new Date(),
      });
      return user;
    } else {
      throw new HttpException(
        'Email already exists',
        HttpStatus.METHOD_NOT_ALLOWED,
      );
    }
  }

  async userFindId(id: number): Promise<any> {
    return await this.usersRepository.findOne(id);
  }
}
