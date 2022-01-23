import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from './dto/createUser.dto';



@Controller('users')
export class UserController {


    @Get()
    userAll() {
        return 'Todos os usuários';
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return 'Usuario Criado: ' + '\n'
            + 'Nome: ' + createUserDto.name + '\n'
            + 'Email: ' + createUserDto.email + '\n'
            + 'Telefone: ' + createUserDto.phone + '\n'
            + 'Cidade: ' + createUserDto.city + '\n'
            + 'Estado: ' + createUserDto.state + '\n'
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() body: string) {
        return 'Usuario Atualizado ' + id;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return 'Usuário Deletado ' + id;
    }
}