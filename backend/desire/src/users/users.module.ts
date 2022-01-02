import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';


@Module({
    imports: [],
    controllers: [UserControllers],
    providers: [UsersService],
    exports: [UsersService],
})

export class UsersModule { }