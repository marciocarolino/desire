import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  usersAll(): Promise<any> {
    return this.usersService.usersAll();
  }

  @Post()
  usersSave(@Body() usersDto: UsersDto): Promise<UsersDto> {
    return this.usersService.userSave(usersDto);
  }
}
