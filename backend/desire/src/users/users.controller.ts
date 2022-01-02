import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) { }


    @Get()
    UserHello(): string {
        return this.userService.olaMundo();
    }
}