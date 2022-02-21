import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/database/repository/users.repository';
import { PasswordHash } from '../passwordHash';
import { UsersDto, UsersUpdateDto } from './dto/users.dto';

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

  async userFindId(id: number): Promise<UsersDto> {
    return await this.usersRepository.findOne({
      where: { id, is_active: true },
    });
  }

  async usersUpdate(
    usersUpdateDto: UsersUpdateDto,
    id: number,
  ): Promise<UsersUpdateDto> | undefined {
    const hash = await this.passwordHash.password(usersUpdateDto.password, 10);
    let updateUser = await this.usersRepository.findOne({
      where: { id, is_active: true },
    });

    if (!usersUpdateDto) return undefined;
    updateUser.name = usersUpdateDto.name;
    updateUser.sex = usersUpdateDto.sex;
    updateUser.cell = usersUpdateDto.cell;
    updateUser.city = usersUpdateDto.city;
    updateUser.state = usersUpdateDto.state;
    updateUser.password = hash;
    updateUser.update_at = new Date();

    updateUser = await this.usersRepository.save(updateUser);

    return updateUser;
  }
}
