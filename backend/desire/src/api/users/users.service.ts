import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/database/repository/users.repository';
import { PasswordHash } from '../passwordHash';
import { UsersDto, UsersUpdateDto, UsersDeleteDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async usersAll(): Promise<any> {
    return this.usersRepository.find({
      where: { is_active: true },
      order: { id: 'ASC' },
    });
  }

  async userSave(usersDto: UsersDto): Promise<UsersDto> {
    const email = usersDto.email;
    const verifyEmail = await this.usersRepository.findOne({ email });
    const hash = await PasswordHash.password(usersDto.password, 10);

    if (!verifyEmail) {
      const user = this.usersRepository.save({
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
    return this.usersRepository.findOne({
      where: { id, is_active: true },
    });
  }

  async usersUpdate(
    usersUpdateDto: UsersUpdateDto,
    id: number,
  ): Promise<UsersUpdateDto> | undefined {
    const hash = await PasswordHash.password(usersUpdateDto.password, 10);
    let updateUser = await this.usersRepository.findOne({
      where: { id, is_active: true },
    });

    if (!updateUser) return undefined;

    if (updateUser) {
      updateUser.name = usersUpdateDto.name;
      updateUser.sex = usersUpdateDto.sex;
      updateUser.cell = usersUpdateDto.cell;
      updateUser.city = usersUpdateDto.city;
      updateUser.state = usersUpdateDto.state;
      updateUser.password = hash;
      updateUser.update_at = new Date();
      updateUser = await this.usersRepository.save(updateUser);
      return updateUser;
    } else {
      throw new HttpException('ID not exists', HttpStatus.METHOD_NOT_ALLOWED);
    }
  }

  async deleteUser(id: number): Promise<UsersDeleteDto> | undefined {
    const users = await this.usersRepository.findOne({
      where: { id, is_active: true },
    });

    if (!users) return undefined;

    users.update_at = new Date();
    users.is_active = false;

    await this.usersRepository.save(users);

    return { result: true };
  }
}
