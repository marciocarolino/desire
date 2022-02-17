import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/database/repository/users.repository';
import { PasswordHash } from '../passwordHash';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  passwordHash = new PasswordHash();

  async usersAll(): Promise<any> {
    return await this.usersRepository.find({
      order: { id: 'ASC' },
    });
  }

  async userSave(usersDto: UsersDto): Promise<UsersDto> {
    const email = usersDto.email;
    const verifyEmail = await this.usersRepository.findOne({ email });
    const hash = await this.passwordHash.password(usersDto.password, 10);

    if (!verifyEmail) {
      const user = await this.usersRepository.save({
        ...usersDto,
        password: hash,
        is_active: true,
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
