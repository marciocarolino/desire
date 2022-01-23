import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('tb_user')
export class UserEntity {


    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'city' })
    city: string;

    @Column({ name: 'state' })
    state: string;

    @Column({ name: 'phone' })
    phone: string;

    @Column({ name: 'email' })
    email: string;

}