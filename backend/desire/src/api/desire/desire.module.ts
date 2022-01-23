import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DesireRepository } from "src/database/repository/desire.repository";



@Module({
    imports: [TypeOrmModule.forFeature([DesireRepository])]
})

export class DesireModule { }