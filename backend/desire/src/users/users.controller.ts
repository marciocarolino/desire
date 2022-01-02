import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUsersDTO } from './dto/update.users.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) { }


    @Get()
    UserHello(): string {
        return this.userService.olaMundo();
    }

    @Post()
    async createUsers(@Body() createUser: CreateUserDTO) {
        return this.userService.createUsers(createUser);
    }
}