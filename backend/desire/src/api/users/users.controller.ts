import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersDeleteDto, UsersDto, UsersUpdateDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  usersAll(): Promise<any> {
    return this.usersService.usersAll();
  }

  @Get(':id')
  userFindId(@Param('id') id: number): Promise<UsersDto> {
    return this.usersService.userFindId(id);
  }

  @Post()
  usersSave(@Body() usersDto: UsersDto): Promise<UsersDto> {
    return this.usersService.userSave(usersDto);
  }

  @Put(':id')
  usersUpdate(
    @Body() usersUpdateDto: UsersUpdateDto,
    @Param('id') id: number,
  ): Promise<UsersUpdateDto> {
    return this.usersService.usersUpdate(usersUpdateDto, id);
  }

  @Delete(':id')
  usersDelete(@Param('id') id: number): Promise<UsersDeleteDto> {
    return this.usersService.deleteUser(id);
  }
}
