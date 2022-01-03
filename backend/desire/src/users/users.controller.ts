import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUsersDTO } from './dto/update.users.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) { }


    @Get()
    async UserHello(createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
        return this.userService.getAllUsers(createUserDTO);
    }

    @Post()
    async createUsers(@Body() createUser: CreateUserDTO) {
        return this.userService.createUsers(createUser);
    }
}