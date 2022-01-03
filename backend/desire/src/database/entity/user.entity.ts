import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    phone: string;

    @Column()
    email: string;

}