import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from './dto/createUser.dto';



@Controller('desires')
export class UserController {


    @Get()
    userAll() {
        return 'Todos os usuários';
    }

    @Post(':createUser')
    createUser(@Body() createUserDto: CreateUserDto) {
        return 'Criando usuario' + createUserDto;
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() body: string) {
        return 'Atualizando usuario ' + id;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return 'Deletando usuario ' + id;
    }
}