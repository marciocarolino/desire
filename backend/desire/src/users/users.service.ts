import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUsers } from './interface/users.interface';
import { CreateUserDTO } from './dto/create.users.dto';

@Injectable()
export class UsersService {

    private lastUserId = 0;
    private users: IUsers[] = [];


    async getAllUsers(createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
        return createUserDTO;
    }

    getUsersById(id: number) {
        const user = this.users.find(user => user.id === id);
        if (user) {
            return user;
        }
        throw new HttpException('User not Found!', HttpStatus.NOT_FOUND);
    }

    createUsers(user: CreateUserDTO) {
        const newUser = {
            id: ++this.lastUserId,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }



}