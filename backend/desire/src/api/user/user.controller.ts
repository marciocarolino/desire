import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";



@Controller('desires')
export class UserController {


    @Get()
    userAll() {
        return 'Todos os usuários';
    }

    @Post(':createUser')
    createUser(@Body() body) {
        return 'Criando usuario' + body;
    }

    @Put(':id')
    updateUser(@Param('id') id: number) {
        return 'Atualizando usuario ' + id;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return 'Deletando usuario ' + id;
    }
}