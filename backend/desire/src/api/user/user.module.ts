import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/database/repository/user.repository";
import { UserController } from './user.controller';


@Module({
    imports: [],
    controllers: [UserController]
})

export class UserModule { }