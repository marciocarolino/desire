import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    olaMundo(): string {
        return 'Olá Service User';
    }
}